import React, { useState, useEffect, useRef, useCallback } from "react";
import "./AdvDisplayMode.css";

// ---------------- Device frame assets ----------------
import {
  BigScreenFrame,
  KioskFrame,
  MobileFrame,
  AnimatedSplitIcon,
  getLayout,
  frameStyle,
  advFeatures,
} from "./AdvData";

const SignalPulse = () => (
  <svg className="adv-signal-pulse" viewBox="0 0 120 120">
    <g>
      <path d="M28 74 A18 18 0 0 1 46 92" className="wave wave1" />
      <path d="M28 58 A34 34 0 0 1 62 92" className="wave wave2" />
      <path d="M28 42 A50 50 0 0 1 78 92" className="wave wave3" />
    </g>
  </svg>
);

// How long a feature stays active before auto-advancing, keyed by its demo count
// const FEATURE_DURATION_BY_DEMO_COUNT = {
//   1: 5000,
//   2: 7000,
// };
const DEFAULT_FEATURE_DURATION = 12000;
// const IMAGE_INTERVAL = 2500;

// Shared crossfading image stack for the display/kiosk/mobile screens; getSrc picks the right asset field per device
function DemoImages({
  demos,
  activeImage,
  prevImage,
  keyPrefix,
  getSrc,
  featureId,
  usbAnimate,
}) {
  return demos.map((demo, i) => {
    let stateClass = "";

    if (i === activeImage) {
      stateClass = " adv-img-active";
    } else if (i === prevImage) {
      stateClass = " adv-img-leaving";
    }

    return (
      <img
        key={`${keyPrefix}-${i}`}
        src={getSrc(demo)}
        alt=""
        className={`adv-screen-img${stateClass}
${featureId === "usb" ? " adv-usb-image" : ""}
${featureId === "usb" && usbAnimate ? " adv-usb-animate" : ""}
${featureId === "split-screen" ? " adv-split-image" : ""}
${featureId === "timing-switch" ? " adv-timing-image" : ""}`}
      />
    );
  });
}

export default function AdvDisplayMode() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [splitStep, setSplitStep] = useState(1);

  const featureTimerRef = useRef(null);
  const imageTimerRef = useRef(null);
  const [usbAnimate, setUsbAnimate] = useState(false);
  const current = advFeatures[activeFeature];
  const layout = getLayout(current.id); // drives all frame positions/sizes
  useEffect(() => {
    if (current.id === "usb") {
      setUsbAnimate(false);

      requestAnimationFrame(() => {
        setUsbAnimate(true);
      });
    }
  }, [current.id]);

  const startFeatureTimer = useCallback(() => {
    clearInterval(featureTimerRef.current);
    const feature = advFeatures[activeFeature];
    const duration = feature.duration ?? DEFAULT_FEATURE_DURATION;

    featureTimerRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % advFeatures.length);
    }, duration);
  }, [activeFeature]);

  useEffect(() => {
    startFeatureTimer();
    return () => clearInterval(featureTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFeature, startFeatureTimer]);

  useEffect(() => {
    setActiveImage(0);
    setPrevImage(null);
    setSplitStep(1);
    clearInterval(imageTimerRef.current);

    const demoCount = current.demos.length;
    const duration = current.duration ?? DEFAULT_FEATURE_DURATION;
    const imgInterval = duration / demoCount;

    if (demoCount > 1) {
      imageTimerRef.current = setInterval(() => {
        setActiveImage((prev) => {
          setPrevImage(prev);
          return (prev + 1) % demoCount;
        });
        setSplitStep((prev) => (prev % 4) + 1);
      }, imgInterval);
    }
    return () => clearInterval(imageTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFeature]);

  const handleSelectFeature = (index) => {
    if (index === activeFeature) return;
    setActiveFeature(index);
    startFeatureTimer();
  };

  const progress = ((activeImage + 1) / current.demos.length) * 100;

  return (
    <div className="adv-main-sec">
      <div className="adv-container">
        {/* LEFT: accordion sidebar */}
        <div className="adv-left">
          <h2 className="adv-heading">Advertising Display</h2>
          <p className="adv-subtitle">
            Available in Horizontal and Vertical Mode
          </p>

          <div className="adv-features">
            {advFeatures.map((feature, i) => {
              const isActive = i === activeFeature;
              return (
                <button
                  key={feature.id}
                  type="button"
                  className={`adv-feature-card${isActive ? " adv-feature-active" : ""}`}
                  onClick={() => handleSelectFeature(i)}
                  aria-expanded={isActive}
                >
                  <span className="adv-feature-row">
                    <span className="adv-feature-icon">{feature.icon}</span>
                    <span className="adv-feature-title">{feature.title}</span>
                  </span>
                  <span className="adv-feature-desc-wrap">
                    <span className="adv-feature-desc">{feature.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: device mockups (big display, kiosk, mobile) */}
        <div className="adv-right">
          <div className="adv-mockup-scale">
            <div className="adv-mockup-wrap">
              {/* ---- Big display ---- */}
              <div className="adv-display-group">
                <div
                  className="adv-display-frame"
                  style={frameStyle(layout.display)}
                >
                  <img
                    className="adv-display-device"
                    src={BigScreenFrame}
                    alt="Big Screen"
                  />
                  <div className="adv-display-screen">
                    {current.id === "usb" && (
                      <div className="adv-usb-black-bg" />
                    )}

                    <DemoImages
                      // demos={current.demos}
                      // activeImage={activeImage}
                      // prevImage={prevImage}
                      // keyPrefix={current.id}
                      // getSrc={(demo) => demo.screen}
                      // featureId={current.id}
                      demos={current.demos}
                      activeImage={activeImage}
                      prevImage={prevImage}
                      keyPrefix={current.id}
                      getSrc={(demo) => demo.screen}
                      featureId={current.id}
                      usbAnimate={usbAnimate}
                    />
                    {current.id === "timing-switch" && (
                      <div className="adv-progress-track">
                        <div
                          className="adv-progress-fill"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  key={current.id}
                  className="adv-headline-block adv-headline-enter"
                  style={{
                    top: layout.headline.top,
                    left: layout.headline.left,
                  }}
                >
                  {current.subIcon === "split" ? (
                    <AnimatedSplitIcon step={splitStep} />
                  ) : current.subIcon ? (
                    <span className="adv-subicon">{current.subIcon}</span>
                  ) : null}
                  <h3 className="adv-update-text">
                    {current.headline}
                    <br />
                    <span className="adv-update-sub-text">
                      {current.subheadline}
                    </span>
                  </h3>
                </div>
              </div>

              {/* ---- Kiosk ---- */}
              <div className="adv-kiosk-frame" style={frameStyle(layout.kiosk)}>
                <img
                  src={KioskFrame}
                  className="adv-kiosk-device"
                  alt="Kiosk Frame"
                />
                <div className="adv-kiosk-screen">
                  {current.id === "usb" && <div className="adv-usb-black-bg" />}

                  <DemoImages
                    demos={current.demos}
                    activeImage={activeImage}
                    prevImage={prevImage}
                    keyPrefix={`${current.id}-kiosk`}
                    getSrc={(demo) => demo.kiosk || demo.phone}
                    featureId={current.id}
                    usbAnimate={usbAnimate}
                  />
                  {current.id === "timing-switch" && (
                    <div className="adv-progress-track">
                      <div
                        className="adv-progress-fill"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* ---- Mobile: always mounted so it fades in/out instead of snapping on feature change ---- */}
              <div
                className={`adv-mobile-frame${layout.mobile.show ? " adv-mobile-visible" : " adv-mobile-hidden"}`}
                style={frameStyle(layout.mobile)}
              >
                <img
                  src={MobileFrame}
                  className="adv-mobile-device"
                  alt="Mobile Frame"
                />
                <div className="adv-mobile-screen">
                  <DemoImages
                    demos={current.demos}
                    activeImage={activeImage}
                    prevImage={prevImage}
                    keyPrefix={`${current.id}-phone`}
                    getSrc={(demo) => demo.phone || demo.screen}
                    featureId={current.id}
                  />
                </div>
                <SignalPulse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
