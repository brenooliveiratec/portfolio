import { useEffect, useRef } from "react";

export function useHeroProgress() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame: number | null = null;

    function updateProgress() {
      frame = null;

      const hero = heroRef.current;
      if (!hero) return;

      const bounds = hero.getBoundingClientRect();
      const distance = Math.max(bounds.height * 0.65, 1);

      const progress = Math.max(0, Math.min(1, -bounds.top / distance));

      hero.style.setProperty("--hero-progress", String(progress));
    }

    function scheduleUpdate() {
      if (frame !== null) return;

      frame = requestAnimationFrame(updateProgress);
    }

    updateProgress();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return heroRef;
}
