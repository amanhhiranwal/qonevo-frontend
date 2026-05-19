import React, { useState, useEffect, useRef } from "react";
import "./BuiltToPerform.css";
import image1 from "../../Assets/buildtomove/image01.jpg";
import image2 from "../../Assets/buildtomove/image02.jpg";
import image3 from "../../Assets/buildtomove/image03.jpg";

const INTERVAL = 2000;

const features = [
  {
    title: "4K UHD Display",
    desc: "Clear visuals and vibrant detail for better visibility and engagement",
    image: image1,
  },
  {
    title: "Anti-Glare Screen",
    desc: "Reduced reflections for uninterrupted visibility",
    image: image2,
  },
  {
    title: "Built-in Camera & Mic",
    desc: "Clear video and voice without external devices",
    image: image3,
  },
];

export default function BuiltToPerform() {
  const [activeFeature, setActiveFeature] = useState(0);

  const timerRef = useRef(null);
  const slideCountRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Two slots alternating — same pattern as MadeForCreation
  const slotARef = useRef(null); // starts visible with image[0]
  const slotBRef = useRef(null); // starts hidden below
  const activeSlotRef = useRef("A");

  const switchTo = (index) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const slideUp = slideCountRef.current % 2 === 0;
    slideCountRef.current++;

    const incoming = features[index].image;
    const activeSlot = activeSlotRef.current;

    const outEl = activeSlot === "A" ? slotARef.current : slotBRef.current;
    const inEl  = activeSlot === "A" ? slotBRef.current : slotARef.current;

    if (!outEl || !inEl) return;

    // Position incoming slot off-screen
    inEl.src = incoming;
    inEl.style.transition = "none";
    inEl.style.transform = slideUp
      ? "translate3d(0, 100%, 0)"
      : "translate3d(0, -100%, 0)";
    inEl.style.zIndex = "2";
    outEl.style.zIndex = "1";

    // Force reflow
    inEl.getBoundingClientRect();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const easing = "cubic-bezier(0.16, 1, 0.3, 1)";
        const duration = "1100ms";

        // Slide new image IN
        inEl.style.transition = `transform ${duration} ${easing}`;
        inEl.style.transform = "translate3d(0, 0, 0)";

        // Slide old image OUT simultaneously
        outEl.style.transition = `transform ${duration} ${easing}`;
        outEl.style.transform = slideUp
          ? "translate3d(0, -100%, 0)"
          : "translate3d(0, 100%, 0)";
      });
    });

    setTimeout(() => {
      // Reset outgoing slot silently off-screen
      outEl.style.transition = "none";
      outEl.style.transform = slideUp
        ? "translate3d(0, -100%, 0)"
        : "translate3d(0, 100%, 0)";

      activeSlotRef.current = activeSlot === "A" ? "B" : "A";
      isAnimatingRef.current = false;
    }, 1150);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveFeature((prev) => {
        const next = (prev + 1) % features.length;
        switchTo(next);
        return next;
      });
    }, INTERVAL);
  };

  useEffect(() => {
    // Initialize slot positions
    if (slotARef.current) {
      slotARef.current.style.transform = "translate3d(0, 0, 0)";
      slotARef.current.style.zIndex = "1";
    }
    if (slotBRef.current) {
      slotBRef.current.style.transform = "translate3d(0, 100%, 0)";
      slotBRef.current.style.zIndex = "2";
    }
    startTimer();
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleFeatureClick = (fi) => {
    if (fi === activeFeature || isAnimatingRef.current) return;
    clearInterval(timerRef.current);
    setActiveFeature(fi);
    switchTo(fi);
    startTimer();
  };

  return (
    <section className="btp-section">
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center">

          {/* LEFT: Content */}
          <div className="col-lg-5 col-md-6 btp-content-col">
            <h2 className="btp-headline">Built to Perform</h2>
            <p className="btp-subtext">
              Designed for smooth multitasking and fast, consistent performance.
            </p>

            <div className="btp-feature-list">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`btp-feature-item${activeFeature === i ? " active" : ""}`}
                  onClick={() => handleFeatureClick(i)}
                >
                  <div style={{ width: "100%" }}>
                    <div className="btp-feature-title">{f.title}</div>
                    <p className="btp-feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="col-lg-7 col-md-6 btp-images-col">
            <div className="btp-monitor-wrapper">
              <div className="btp-screen-container">

                <img
                  ref={slotARef}
                  src={features[0].image}
                  alt="feature A"
                  className="btp-screen-img"
                />
                <img
                  ref={slotBRef}
                  src=""
                  alt="feature B"
                  className="btp-screen-img"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}