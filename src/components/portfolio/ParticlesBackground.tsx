import { useEffect, useRef } from "react";

/**
 * Matrix-style digital rain background.
 * Reads --primary from the design system so it adapts to theme color changes.
 */
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Read the primary HSL value from CSS variables for theme-aware color
    const styles = getComputedStyle(document.documentElement);
    const primaryHsl = styles.getPropertyValue("--primary").trim() || "188 95% 55%";
    const bgHsl = styles.getPropertyValue("--background").trim() || "240 20% 6%";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 16;
    const charset = "01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF{}[]<>/=*+-#$".split("");

    const resize = () => {
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      if (width === newWidth && height === newHeight) return;

      const widthChanged = width !== newWidth;

      // Save existing canvas to prevent blink during resize
      let tempCanvas: HTMLCanvasElement | null = null;
      if (width > 0 && height > 0) {
        tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext("2d");
        if (tempCtx) tempCtx.drawImage(canvas, 0, 0);
      }

      width = newWidth;
      height = newHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Restore old canvas content
      if (tempCanvas) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.restore();
      }

      const newColumns = Math.floor(width / fontSize);
      if (widthChanged || drops.length === 0) {
        columns = newColumns;
        drops = Array.from({ length: columns }, () => Math.random() * -50);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId = 0;
    let lastFrame = 0;
    const targetFps = 24; // slower = more readable rain
    const frameInterval = 1000 / targetFps;

    const draw = (now: number) => {
      animationId = requestAnimationFrame(draw);
      if (now - lastFrame < frameInterval) return;
      lastFrame = now;

      // Trail fade — translucent background overlay
      ctx.fillStyle = `hsla(${bgHsl} / 0.08)`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const text = charset[Math.floor(Math.random() * charset.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of the column = bright white-ish, rest = primary color
        const isHead = Math.random() > 0.975;
        if (isHead) {
          ctx.fillStyle = "hsla(0 0% 100% / 0.9)";
        } else {
          const opacity = 0.35 + Math.random() * 0.4;
          ctx.fillStyle = `hsla(${primaryHsl} / ${opacity})`;
        }
        ctx.fillText(text, x, y);

        // Reset column when it goes off-screen
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
