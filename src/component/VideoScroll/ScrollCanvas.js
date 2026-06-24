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
  

    // const images = [];
    const images = new Array(frameCount).fill(null); // was []
   let currentFrameIndex = 0;
    let rafId = null;
    let isDrawing = false;

    


    // ---------- FRAME PATH ----------
    const currentFrame = (index) =>
      `/frames/frame_${String(index).padStart(4, "0")}.png`;

    // ---------- PRELOAD ----------
    // for (let i = 1; i <= frameCount; i++) {
    //   const img = new Image();
    //   img.src = currentFrame(i);
    //   images.push(img);
    // }


    // const drawImage = (img) => {
    //   if (!img) return;

    //   context.clearRect(0, 0, canvas.width, canvas.height);

    //   const scale = Math.min(
    //     canvas.width / img.width,
    //     canvas.height / img.height,
    //   );

    //   const x = (canvas.width - img.width * scale) / 2;

    //   const y = (canvas.height - img.height * scale) / 2;

    //   context.drawImage(img, x, y, img.width * scale, img.height * scale);
    // };

    const drawImage = (img) => {
  if (!img || !img.complete) return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(
    canvas.width / img.naturalWidth,
    canvas.height / img.naturalHeight
  );

  const x = (canvas.width - img.naturalWidth * scale) / 2;
  const y = (canvas.height - img.naturalHeight * scale) / 2;

  context.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
};
 
    // ---------- CANVAS SIZE ----------
const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redraw current frame on resize
      if (images[currentFrameIndex]) {
        drawImage(images[currentFrameIndex]);
      }
    };


        setCanvasSize();
    window.addEventListener("resize", setCanvasSize);


    // ---------- SMART PRELOAD ----------
    // Load first frame immediately, then load in batches
    const loadImage = (index) => {
      return new Promise((resolve) => {
        if (images[index]) return resolve(images[index]);
        const img = new Image();
        img.onload = () => {
          images[index] = img;
          resolve(img);
        };
        img.onerror = () => resolve(null);
        img.src = currentFrame(index + 1);
      });
    };

       loadImage(0).then((img) => {
      drawImage(img);

      // Load remaining frames in background after first frame is shown
    const loadRemaining = async () => {
        // Load in small batches to avoid saturating network
        const batchSize = 10;
        for (let i = 1; i < frameCount; i += batchSize) {
          const batch = [];
          for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
            batch.push(loadImage(j));
          }
          await Promise.all(batch);
        }
      };

      loadRemaining();
    });

  

    // ---------- SCROLL ----------
    // const updateFrame = () => {
    //   const rect = section.getBoundingClientRect();

    //   const scrollableHeight = section.offsetHeight - window.innerHeight;

    //   // section-relative progress
    //   const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);

    //   // frame mapping
    //   const frameIndex = Math.min(
    //     frameCount - 1,
    //     Math.floor(progress * (frameCount - 1)),
    //   );

    //   requestAnimationFrame(() => {
    //     drawImage(images[frameIndex]);
    //   });
    // };

    const updateFrame = () => {
  if (isDrawing) return;
  isDrawing = true;
  const rect = section.getBoundingClientRect();
  const scrollableHeight = section.offsetHeight - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);
  const frameIndex = Math.min(frameCount - 1, Math.floor(progress * (frameCount - 1)));
  if (frameIndex !== currentFrameIndex) {
    currentFrameIndex = frameIndex;
    rafId = requestAnimationFrame(() => {
      drawImage(images[frameIndex]);
      isDrawing = false;
    });
  } else {
    isDrawing = false;
  }
};

    window.addEventListener("scroll", updateFrame, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", setCanvasSize);

        if (rafId) cancelAnimationFrame(rafId);
  images.fill(null);

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
