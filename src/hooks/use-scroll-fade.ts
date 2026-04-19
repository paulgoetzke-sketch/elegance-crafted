import { useEffect, useRef, useState, type CSSProperties } from "react";

export function useScrollFade<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const fadeDistance = window.innerHeight * 0.6;
      const p = rect.top < 0 ? Math.min(-rect.top / fadeDistance, 1) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const eased = 1 - Math.pow(1 - progress, 2);
  const style: CSSProperties = {
    opacity: 1 - eased,
    transform: `translate3d(0, ${-progress * 40}px, 0)`,
    willChange: progress > 0 && progress < 1 ? "opacity, transform" : undefined,
  };

  return { ref, style, progress };
}
