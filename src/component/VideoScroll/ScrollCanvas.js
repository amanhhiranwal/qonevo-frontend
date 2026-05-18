import { useEffect, useRef } from "react";
import "./ScrollCanvas.css";

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const frameCount = 204;

    const canvas = canvasRef.current;
    const section = sectionRef.current;

    const context = canvas.getContext("2d");

    const images = [];

    // ---------- FRAME PATH ----------
    const currentFrame = (index) =>
      `/frames/frame_${String(index).padStart(4, "0")}.png`;

    // ---------- PRELOAD ----------
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // ---------- CANVAS SIZE ----------
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    window.addEventListener("resize", setCanvasSize);

    // ---------- DRAW ----------
    const drawImage = (img) => {
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height,
      );

      const x = (canvas.width - img.width * scale) / 2;

      const y = (canvas.height - img.height * scale) / 2;

      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // ---------- FIRST FRAME ----------
    images[0].onload = () => {
      drawImage(images[0]);
    };

    // ---------- SCROLL ----------
    const updateFrame = () => {
      const rect = section.getBoundingClientRect();

      const scrollableHeight = section.offsetHeight - window.innerHeight;

      // section-relative progress
      const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);

      // frame mapping
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * (frameCount - 1)),
      );

      requestAnimationFrame(() => {
        drawImage(images[frameIndex]);
      });
    };

    window.addEventListener("scroll", updateFrame);

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section">
      <div className="sticky-canvas">
        <canvas ref={canvasRef} className="scroll-canvas" />
      </div>
    </section>
  );
}
