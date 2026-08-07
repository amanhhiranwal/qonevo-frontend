import React, { useEffect, useState } from "react";
import "./AdvDisplayMode.css";

import {
  BigScreenFrame,
  KioskFrame,
  MobileFrame,
  AnimatedSplitIcon,
  getLayout,
  frameStyle,
  advFeatures,
} from "./AdvData";

const DEFAULT_FEATURE_DURATION = 12000;

const SignalPulse = () => (
  <svg className="adv-signal-pulse" viewBox="0 0 120 120">
    <g>
      <path d="M28 74 A18 18 0 0 1 46 92" className="wave wave1" />
      <path d="M28 58 A34 34 0 0 1 62 92" className="wave wave2" />
      <path d="M28 42 A50 50 0 0 1 78 92" className="wave wave3" />
    </g>
  </svg>
);

function DemoImages({
  demos,
  activeImage,
  prevImage,
  keyPrefix,
  getSrc,
  featureId,
  usbAnimate = false,
}) {
  return demos.map((demo, index) => {
    const stateClass =
      index === activeImage
        ? "adv-img-active"
        : index === prevImage
          ? "adv-img-leaving"
          : "";

    const featureClasses = [
      "adv-screen-img",
      stateClass,
      featureId === "usb" && "adv-usb-image",
      featureId === "usb" && usbAnimate && "adv-usb-animate",
      featureId === "split-screen" && "adv-split-image",
      featureId === "timing-switch" && "adv-timing-image",
      featureId === "remote-publishing" && "adv-remote-image",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <img
        key={`${keyPrefix}-${index}`}
        src={getSrc(demo)}
        alt=""
        className={featureClasses}
      />
    );
  });
}

export default function AdvDisplayMode() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [splitStep, setSplitStep] = useState(1);
  const [usbAnimate, setUsbAnimate] = useState(false);

  const current = advFeatures[activeFeature] || advFeatures[0];
  const layout = getLayout(current.id);
  const demoCount = current.demos.length;
  const featureDuration = current.duration ?? DEFAULT_FEATURE_DURATION;
  const progress = ((activeImage + 1) / demoCount) * 100;

  useEffect(() => {
    if (current.id !== "usb") {
      setUsbAnimate(false);
      return undefined;
    }

    setUsbAnimate(false);
    const animationFrame = requestAnimationFrame(() => {
      setUsbAnimate(true);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [current.id]);

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature((previousFeature) =>
        (previousFeature + 1) % advFeatures.length,
      );
    }, featureDuration);

    return () => clearInterval(featureTimer);
  }, [activeFeature, featureDuration]);

  useEffect(() => {
    setActiveImage(0);
    setPrevImage(null);
    setSplitStep(1);

    if (demoCount <= 1) {
      return undefined;
    }

    const imageInterval = featureDuration / demoCount;
    const imageTimer = setInterval(() => {
      setActiveImage((previousImage) => {
        setPrevImage(previousImage);
        return (previousImage + 1) % demoCount;
      });
      setSplitStep((previousStep) => (previousStep % 4) + 1);
    }, imageInterval);

    return () => clearInterval(imageTimer);
  }, [activeFeature, demoCount, featureDuration]);

  const handleSelectFeature = (index) => {
    if (index !== activeFeature) {
      setActiveFeature(index);
    }
  };

  return (
    <div className="adv-main-sec">
      <div className="adv-container">
        <div className="adv-left">
          <h2 className="adv-heading">Advertising Display</h2>
          <p className="adv-subtitle">
            Available in Horizontal and Vertical Mode
          </p>

          <div className="adv-features">
            {advFeatures.map((feature, index) => {
              const isActive = index === activeFeature;
              const descriptionId = `adv-feature-desc-${feature.id}`;

              return (
                <button
                  key={feature.id}
                  type="button"
                  className={`adv-feature-card${
                    isActive ? " adv-feature-active" : ""
                  }`}
                  onClick={() => handleSelectFeature(index)}
                  aria-expanded={isActive}
                  aria-controls={descriptionId}
                >
                  <span className="adv-feature-row">
                    <span className="adv-feature-icon">{feature.icon}</span>
                    <span className="adv-feature-title">{feature.title}</span>
                  </span>

                  <span
                    id={descriptionId}
                    className="adv-feature-desc-wrap"
                  >
                    <span className="adv-feature-desc">{feature.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="adv-right">
          <div className="adv-mockup-scale">
            <div
              className="adv-mockup-wrap"
              data-adv-feature={current.id}
            >
              <div className="adv-display-group">
                <div
                  className="adv-display-frame"
                  style={{ ...frameStyle(layout.display) }}
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
                  style={frameStyle(layout.headline)}
                >
                  {/* subIcon hidden in headline for USB (shown on TV + kiosk instead) */}
                  {current.id !== "usb" && current.subIcon ? (
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

              {/* USB overlay icon — centered on top of TV (display) */}
              {current.id === "usb" && current.subIcon && (
                <div
                  key="usb-overlay-display"
                  className="adv-usb-overlay-icon"
                  style={frameStyle(layout.display)}
                >
                  <div className="adv-usb-overlay-icon-inner">
                    {current.subIcon}
                  </div>
                </div>
              )}

              <div
                className="adv-kiosk-frame"
                style={frameStyle(layout.kiosk)}
              >
                <img
                  src={KioskFrame}
                  className="adv-kiosk-device"
                  alt="Kiosk Frame"
                />

                <div className="adv-kiosk-screen">
                  {current.id === "usb" && (
                    <div className="adv-usb-black-bg" />
                  )}

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

              {/* USB overlay icon — centered on top of Kiosk */}
              {current.id === "usb" && current.subIcon && (
                <div
                  key="usb-overlay-kiosk"
                  className="adv-usb-overlay-icon adv-usb-overlay-kiosk"
                  style={frameStyle(layout.kiosk)}
                >
                  <div className="adv-usb-overlay-icon-inner">
                    {current.subIcon}
                  </div>
                </div>
              )}

              <div
                className={`adv-mobile-frame${
                  layout.mobile.show
                    ? " adv-mobile-visible"
                    : " adv-mobile-hidden"
                }`}
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
                    usbAnimate={usbAnimate}
                  />
                </div>

                {current.showPulse && <SignalPulse />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}