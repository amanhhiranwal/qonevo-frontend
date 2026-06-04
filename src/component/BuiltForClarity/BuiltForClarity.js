import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import "./BuiltForClarity.css";

import image1 from "../../Assets/BuildForClarity/image2.png";
import image2 from "../../Assets/BuildForClarity/image3.png";
import image3 from "../../Assets/BuildForClarity/image1.png";

const INTERVAL = 3000;

const features = [
  {
    title: "Automatic Brightness Adjustment",
    desc: "Adapts brightness and tone for every environment.",
    image: image1,
  },
  {
    title: "Adjustable Color Temperature",
    desc: "Warm-to-cool tones for precise visual ambiance.",
    image: image2,
  },
  {
    title: "7680Hz Ultra Refresh Rate",
    desc: "Smoother visuals with reduced flicker and motion blur.",
    image: image3,
  },
];

const BuiltForClarity = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const timerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const slotARef = useRef(null);
  const slotBRef = useRef(null);

  const activeSlotRef = useRef("A");

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

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActiveFeature((prev) => {
        const next =
          (prev + 1) % features.length;

        switchTo(next);

        return next;
      });
    }, INTERVAL);
  }, []);

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
  }, [startTimer]);

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
    <section className="clarity-section">
      <div className="clarity-wrapper">

        <div className="clarity-left-container">

          <h2 className="clarity-heading">
            Built for Clarity
          </h2>

          <p className="clarity-subtext">
            Designed for smooth multitasking and
            fast, consistent performance.
          </p>

          <div className="clarity-feature-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`clarity-feature-item ${
                  activeFeature === index
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleFeatureClick(index)
                }
              >
                <div className="clarity-feature-content">

                  <h4 className="clarity-feature-title">
                    {feature.title}
                  </h4>

                  <p className="clarity-feature-desc">
                    {feature.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clarity-right-container">

          <div className="clarity-image-wrapper">

            <img
              ref={slotARef}
              src={features[0].image}
              alt="feature"
              className="clarity-image"
              loading="lazy"
            />

            <img
              ref={slotBRef}
              src=""
              alt="feature"
              className="clarity-image"
              loading="lazy"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForClarity;