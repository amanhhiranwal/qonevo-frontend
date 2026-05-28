import React, { useEffect, useRef, useState } from "react";
import "./FlexibleByDesign.css";

import image1 from "../../Assets/FlexibleByDesign/image1.png";
import image2 from "../../Assets/FlexibleByDesign/image2.png";
import image3 from "../../Assets/FlexibleByDesign/image3.png";

const INTERVAL = 3000;

const features = [
  {
    title: "Right Angle Seamless Splicing",
    desc: "Perfect corner integration for L-shaped installations.",
    image: image1,
  },
  {
    title: "Concave & Convex Curving",
    desc: "Supports inward and outward curved configurations.",
    image: image2,
  },
  {
    title: "Flexible LED Modules",
    desc: "Enables creative shapes & dynamic visual installations.",
    image: image3,
  },
];

const FlexibleByDesign = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const timerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const slotARef = useRef(null);
  const slotBRef = useRef(null);

  const activeSlotRef = useRef("A");

  /* =========================================
     IMAGE SWITCH ANIMATION
  ========================================= */

  const switchTo = (index) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const incoming = features[index].image;

    const activeSlot = activeSlotRef.current;

    const outEl =
      activeSlot === "A"
        ? slotARef.current
        : slotBRef.current;

    const inEl =
      activeSlot === "A"
        ? slotBRef.current
        : slotARef.current;

    if (!outEl || !inEl) return;

    /* NEW IMAGE STARTS FROM TOP */

    inEl.src = incoming;

    inEl.style.transition = "none";
    inEl.style.transform =
      "translate3d(0,-100%,0)";
    inEl.style.zIndex = "2";

    outEl.style.zIndex = "1";

    inEl.getBoundingClientRect();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const easing =
          "cubic-bezier(0.22, 1, 0.36, 1)";

        const duration = "1400ms";

        inEl.style.transition =
          `transform ${duration} ${easing}`;

        inEl.style.transform =
          "translate3d(0,0,0)";
      });
    });

    setTimeout(() => {
      outEl.style.transition = "none";

      outEl.style.transform =
        "translate3d(0,0,0)";

      activeSlotRef.current =
        activeSlot === "A" ? "B" : "A";

      isAnimatingRef.current = false;
    }, 1450);
  };

  /* =========================================
     TIMER
  ========================================= */

  const startTimer = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActiveFeature((prev) => {
        const next =
          (prev + 1) % features.length;

        switchTo(next);

        return next;
      });
    }, INTERVAL);
  };

  /* =========================================
     INITIAL SETUP
  ========================================= */

  useEffect(() => {
    if (slotARef.current) {
      slotARef.current.style.transform =
        "translate3d(0,0,0)";

      slotARef.current.style.zIndex = "1";
    }

    if (slotBRef.current) {
      slotBRef.current.style.transform =
        "translate3d(0,-100%,0)";

      slotBRef.current.style.zIndex = "2";
    }

    startTimer();

    return () => clearInterval(timerRef.current);
  }, []);

  /* =========================================
     FEATURE CLICK
  ========================================= */

  const handleFeatureClick = (index) => {
    if (
      index === activeFeature ||
      isAnimatingRef.current
    )
      return;

    clearInterval(timerRef.current);

    setActiveFeature(index);

    switchTo(index);

    startTimer();
  };

  return (
    <section className="fbd-section">
      <div className="fbd-wrapper">

        {/* LEFT IMAGE */}
        <div className="fbd-left-container">
          <div className="fbd-image-wrapper">

            <img
              ref={slotARef}
              src={features[0].image}
              alt="feature"
              className="fbd-image"
            />

            <img
              ref={slotBRef}
              src=""
              alt="feature"
              className="fbd-image"
            />

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="fbd-right-container">

          <h2 className="fbd-heading">
            Flexible by Design
          </h2>

          <p className="fbd-subtext">
            Engineered for precision,
            collaboration, and real-time
            communication
          </p>

          <div className="fbd-feature-list">
            {features.map((feature, index) => {
              const isActive =
                activeFeature === index;

              return (
                <div
                  key={index}
                  className={`fbd-feature-item ${
                    isActive
                      ? "active"
                      : "inactive"
                  }`}
                  onClick={() =>
                    handleFeatureClick(index)
                  }
                >
                  {/* LEFT BAR */}
                  <div className="fbd-bar">

                    {isActive && (
                      <div
                        key={activeFeature}
                        className="fbd-bar-fill"
                        style={{
                          animationDuration:
                            `${INTERVAL}ms`,
                        }}
                      />
                    )}

                  </div>

                  <div className="fbd-feature-content">

                    <h4 className="fbd-feature-title">
                      {feature.title}
                    </h4>

                    <p className="fbd-feature-desc">
                      {feature.desc}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlexibleByDesign;