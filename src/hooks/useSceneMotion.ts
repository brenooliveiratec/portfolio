import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";

type MotionValues = {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
};

const initialMotion: MotionValues = {
  rotateX: 0,
  rotateY: 0,
  glowX: 0,
  glowY: 0,
};

const motionKeys: (keyof MotionValues)[] = [
  "rotateX",
  "rotateY",
  "glowX",
  "glowY",
];

export function useSceneMotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const frameRef = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);

  const current = useRef<MotionValues>({ ...initialMotion });
  const target = useRef<MotionValues>({ ...initialMotion });

  function paint() {
    stageRef.current?.style.setProperty(
      "--rotate-x",
      `${current.current.rotateX}deg`,
    );

    stageRef.current?.style.setProperty(
      "--rotate-y",
      `${current.current.rotateY}deg`,
    );

    sectionRef.current?.style.setProperty(
      "--glow-x",
      `${current.current.glowX}px`,
    );

    sectionRef.current?.style.setProperty(
      "--glow-y",
      `${current.current.glowY}px`,
    );
  }

  function animate(time: number) {
    const elapsed =
      lastTime.current === null ? 16 : Math.min(time - lastTime.current, 64);

    lastTime.current = time;

    const smoothing = 1 - Math.exp(-elapsed / 100);
    let remaining = 0;

    for (const key of motionKeys) {
      current.current[key] +=
        (target.current[key] - current.current[key]) * smoothing;

      remaining += Math.abs(target.current[key] - current.current[key]);
    }

    if (remaining < 0.05) {
      current.current = { ...target.current };
      paint();

      frameRef.current = null;
      lastTime.current = null;
      return;
    }

    paint();
    frameRef.current = requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (frameRef.current !== null) return;

    lastTime.current = null;
    frameRef.current = requestAnimationFrame(animate);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (event.pointerType !== "mouse" || reducedMotion) return;

    const section = event.currentTarget.getBoundingClientRect();
    const stage = stageRef.current?.getBoundingClientRect();

    const sectionX = (event.clientX - section.left) / section.width;
    const sectionY = (event.clientY - section.top) / section.height;

    target.current.glowX = (sectionX - 0.5) * 480;
    target.current.glowY = (sectionY - 0.5) * 240;

    const insideStage =
      stage &&
      event.clientX >= stage.left &&
      event.clientX <= stage.right &&
      event.clientY >= stage.top &&
      event.clientY <= stage.bottom;

    if (stage && insideStage) {
      const x = (event.clientX - stage.left) / stage.width;
      const y = (event.clientY - stage.top) / stage.height;

      target.current.rotateX = (0.5 - y) * 8;
      target.current.rotateY = (x - 0.5) * 12;
    } else {
      target.current.rotateX = 0;
      target.current.rotateY = 0;
    }

    startAnimation();
  }

  function resetPointer() {
    target.current = { ...initialMotion };
    startAnimation();
  }

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

    function stopMotion() {
      if (!preference.matches) return;

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = null;
      lastTime.current = null;
      current.current = { ...initialMotion };
      target.current = { ...initialMotion };

      stageRef.current?.style.setProperty("--rotate-x", "0deg");
      stageRef.current?.style.setProperty("--rotate-y", "0deg");
      sectionRef.current?.style.setProperty("--glow-x", "0px");
      sectionRef.current?.style.setProperty("--glow-y", "0px");
    }

    preference.addEventListener("change", stopMotion);

    return () => {
      preference.removeEventListener("change", stopMotion);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = null;
    };
  }, []);

  return {
    sectionRef,
    stageRef,
    handlePointerMove,
    resetPointer,
  };
}
