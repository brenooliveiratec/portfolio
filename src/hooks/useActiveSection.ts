import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const headerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let frame: number | null = null;

    function updateActiveSection() {
      frame = null;

      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 80;

      document.documentElement.style.setProperty(
        "--site-header-height",
        `${headerHeight + 16}px`,
      );

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section !== null);

      if (sections.length === 0) return;

      const readingLine = headerHeight + 32;
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) {
          currentId = section.id;
        }
      }

      const reachedBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        currentId = sections[sections.length - 1].id;
      }

      setActiveId(currentId);
    }

    function scheduleUpdate() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, [sectionIds]);

  return { activeId, headerRef };
}
