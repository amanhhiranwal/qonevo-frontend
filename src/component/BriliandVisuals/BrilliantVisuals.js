import React, { useState, useRef, useEffect, useCallback } from "react";
import "./BrilliantVisuals.css";
import {
  SIGNAGE_FEATURES,
  IMAGE_INTERVAL,
  DEVICE_FRAME,
  FEATURE_LAYOUTS,
} from "./data.js";

export default function BrilliantVisuals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutsRef = useRef([]);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const clearSequence = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Drives everything: cycles this tab's own images one by one, then
  // advances to the next tab only after the last image's turn is done.
const runSequence = useCallback(() => {
  clearSequence();

  const feature = SIGNAGE_FEATURES[activeIndexRef.current];
  const images = feature.images || [];

  setImageIndex(0);

  const imageCount = Math.max(images.length, 1);

  // Change image every IMAGE_INTERVAL
  for (let i = 1; i < imageCount; i++) {
    timeoutsRef.current.push(
      setTimeout(() => {
        setImageIndex(i);
      }, i * IMAGE_INTERVAL)
    );
  }

  // Move to next tab after all images have been shown
  timeoutsRef.current.push(
    setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % SIGNAGE_FEATURES.length);
    }, imageCount * IMAGE_INTERVAL)
  );

}, [clearSequence]);

useEffect(() => {
  if (isPaused) return;

  runSequence();

  return () => {
    clearSequence();
  };
}, [activeIndex, isPaused, runSequence, clearSequence]);

const handleSelect = (index) => {
  if (index === activeIndexRef.current) return;

  clearSequence();
   setIsPaused(false);  

  activeIndexRef.current = index;
  setImageIndex(0);
  setActiveIndex(index);

  setTimeout(() => {
    runSequence();
  }, 0);
};
  const layout = FEATURE_LAYOUTS[activeIndex];
  const headingPosition = layout.heading;

  return (
    <section className="bv-section">
      <div className="bv-left">
        <div className="bv-left-visuals">
            
        </div>
        <div
          className="bv-device"
          // style={{
          //   transform: `translate(${layout.device.x}%, ${layout.device.y}%) scale(${layout.device.scale})`,
          // }}
          style={{
    "--bv-dx": layout.device.x,
    "--bv-dy": layout.device.y,
    "--bv-dscale": layout.device.scale,
  }}
        >
          <div className="bv-device-screen">
            {SIGNAGE_FEATURES.map((f, i) => {
              const isActiveTab = i === activeIndex;
              const animClass = f.imageAnimation === "reveal" ? "reveal" : "fade";

              return (
                <div
                  key={f.id}
                  className={`bv-tab-image-stack${isActiveTab ? " active" : ""}`}
                >
                  {f.images.map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt={f.title}
                      className={`bv-device-image ${animClass}${
                        isActiveTab && j === imageIndex ? " active" : ""
                      }`}
                    />
                  ))}

                  {f.shine && isActiveTab && (
                    <div
                      key={`${f.id}-shine-${activeIndex}-${imageIndex}`}
                      className="bv-screen-shine"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <img src={DEVICE_FRAME} alt="" className="bv-device-frame" />
<div className="bv-device-popup-layer">
  {SIGNAGE_FEATURES.map((f, i) =>
    f.popup ? (
      <div
        key={f.id}
        className={`bv-device-popup${i === activeIndex ? " active" : ""}`}
      >
        <img
          src={f.popup.image}
          alt=""
          className="bv-device-popup-image"
        />
      </div>
    ) : null
  )}
</div>
        </div>

        <div
          className="bv-heading-stack"
          aria-live="polite"
          // style={{
          //   transform: `translate(${headingPosition.x}%, ${headingPosition.y}%)`,
          // }}
          style={{
    "--bv-hx": headingPosition.x,
    "--bv-hy": headingPosition.y,
  }}
        >
          {SIGNAGE_FEATURES.map((f, i) => (
            <h2
              key={f.id}
              className={`bv-heading${
                i === activeIndex ? " active" : i < activeIndex ? " exit-up" : " exit-down"
              }`}
            >
              {f.heading[0]}
              <br />
              {f.heading[1]}
            </h2>
          ))}
        </div>
      </div>

      <div className="bv-right">
        <h3 className="bv-title">Signage</h3>
        <p className="bv-subtitle">
          From Indoor Directories to outdoor wayfinding, our signage solutions
          deliver visual clarity and architectural elegance. Engineered to
          perform across varied lighting conditions with comprehensive
          connectivity options and customizable layouts.
        </p>

        <div
          className="bv-accordion"
          role="tablist"
          aria-label="Signage features"
        //   onMouseEnter={() => setIsPaused(true)}
        //   onMouseLeave={() => setIsPaused(false)}
        >
          {SIGNAGE_FEATURES.map((f, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-expanded={active}
                className={`bv-accordion-item${active ? " active" : ""}`}
                onClick={() => handleSelect(i)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                <span className="bv-accordion-header">
                  <span className="bv-icon">{f.icon}</span>
                  <span className="bv-accordion-title">{f.title}</span>
                </span>
                <div className="bv-accordion-body-wrapper">
                  <div className="bv-accordion-body">
                    <p>{f.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}