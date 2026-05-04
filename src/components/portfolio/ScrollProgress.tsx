import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-warm transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 12px hsl(var(--primary) / 0.7), 0 0 24px hsl(var(--primary) / 0.4)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
