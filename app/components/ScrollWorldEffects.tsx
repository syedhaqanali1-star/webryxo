"use client";

import { useEffect } from "react";

export default function ScrollWorldEffects() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateStages = () => {
      frame = 0;
      if (mediaQuery.matches) return;

      const viewportHeight = window.innerHeight;
      const stages = document.querySelectorAll<HTMLElement>(
        "main[data-scroll-world] > section"
      );

      stages.forEach((stage) => {
        const bounds = stage.getBoundingClientRect();
        const stageCenter = bounds.top + bounds.height / 2;
        const range = viewportHeight / 2 + bounds.height / 2;
        const distance = Math.max(
          -1,
          Math.min(1, (stageCenter - viewportHeight / 2) / range)
        );
        const depth = 1 - Math.abs(distance);

        stage.classList.add("scroll-stage");
        stage.style.setProperty("--scroll-stage-depth", depth.toFixed(3));
        stage.style.setProperty(
          "--scroll-stage-tilt",
          `${(distance * -4.5).toFixed(2)}deg`
        );
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateStages);
    };

    updateStages();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      document.querySelectorAll<HTMLElement>(".scroll-stage").forEach((stage) => {
        stage.classList.remove("scroll-stage");
        stage.style.removeProperty("--scroll-stage-depth");
        stage.style.removeProperty("--scroll-stage-tilt");
      });
    };
  }, []);

  return null;
}
