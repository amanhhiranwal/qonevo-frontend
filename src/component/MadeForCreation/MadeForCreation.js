import React, { useState, useEffect, useRef } from "react";
import "../../component/Builttoperform/BuiltToPerform.css";
import image1 from "../../Assets/madeforcreation/Image04 (2).png";
import image2 from "../../Assets/madeforcreation/Image05.png";
import image3 from "../../Assets/madeforcreation/Image06.png";

// const INTERVAL = 2000;
;

const INTERVAL = 4000;

const features = [
  { title: "Natural Writing Experience", desc: "Smooth, precise writing with zero lag", image: image1 },
  { title: "Gravity AI Whiteboarding", desc: "Smart tools that organize and enhance every idea", image: image2 },
  { title: "Voice Capture & Clarity", desc: "Advanced mic array guarantees clear communication", image: image3 },
];

export default function MadeForCreation() {
  const [activeFeature, setActiveFeature] = useState(0);
  const timerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const activeSlotRef = useRef("A");
  const cycleRef = useRef(0);
  const slotARef = useRef(null);
  const slotBRef = useRef(null);

  const switchTo = (index) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const incoming = features[index].image;
    const activeSlot = activeSlotRef.current;

    const outEl = activeSlot === "A" ? slotARef.current : slotBRef.current;
    const inEl  = activeSlot === "A" ? slotBRef.current : slotARef.current;

    if (!outEl || !inEl) return;

    const isBottomUp = cycleRef.current < 2;
    cycleRef.current = (cycleRef.current + 1) % 3;

    inEl.querySelector("img").src = incoming;
    inEl.style.transition = "none";
    inEl.style.clipPath = isBottomUp ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";
    inEl.style.zIndex = "2";
    outEl.style.zIndex = "1";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // inEl.style.transition = "clip-path 900ms cubic-bezier(0.76, 0, 0.24, 1)";
         inEl.style.transition = "clip-path 1600ms cubic-bezier(0.76, 0, 0.24, 1)";
        inEl.style.clipPath = "inset(0% 0 0% 0)";
      });
    });

    setTimeout(() => {
      outEl.style.transition = "none";
      outEl.style.clipPath = isBottomUp ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";
      activeSlotRef.current = activeSlot === "A" ? "B" : "A";
      isAnimatingRef.current = false;
    }, 1650);
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
    if (slotARef.current) {
      slotARef.current.style.clipPath = "inset(0% 0 0 0)";
      slotARef.current.style.zIndex = "1";
    }
    if (slotBRef.current) {
      slotBRef.current.style.clipPath = "inset(100% 0 0 0)";
      slotBRef.current.style.zIndex = "2";
    }
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleFeatureClick = (fi) => {
    if (fi === activeFeature || isAnimatingRef.current) return;
    clearInterval(timerRef.current);
    setActiveFeature(fi);
    switchTo(fi);
    startTimer();
  };

  return (
    <section className="btp-section-made-for-creation">
      <div className="container-fluid px-0">
        <div className="row g-5 align-items-center">

          <div className="col-lg-8 col-md-7 btp-images-col">
            <div className="btp-monitor-wrapper">
              <div className="btp-screen-container">
                <div ref={slotARef} className="btp-slot">
                  <img src={features[0].image} alt="feature A" className="btp-screen-img" />
                </div>
                <div ref={slotBRef} className="btp-slot">
                  <img src="" alt="feature B" className="btp-screen-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5 btp-content-col">
            <h2 className="btp-headline">Made for Creation</h2>
            <p className="btp-subtext">
              Engineered for precision, collaboration, and real-time communication
            </p>
            <div className="btp-feature-list">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`btp-feature-item${activeFeature === i ? " active" : ""}`}
                  onClick={() => handleFeatureClick(i)}
                >
                  <div className="btp-feature-text">
                    <div className="btp-feature-title">{f.title}</div>
                    <p className="btp-feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}