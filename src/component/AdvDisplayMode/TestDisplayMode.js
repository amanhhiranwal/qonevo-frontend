import React, { useCallback, useEffect, useRef, useState } from "react";
import "./TestDisplayMode.css";
import MobileScreen1 from "../../Assets/AdvDisplay/Mobile Screen 1.png";
import MobileScreen2 from "../../Assets/AdvDisplay/Mobile Screen 2.png";
import MobileScreen3 from "../../Assets/AdvDisplay/Mobile Screen 3.png";
import MobileScreen4 from "../../Assets/AdvDisplay/Mobile Screen 4.png";
import BigScreen1 from "../../Assets/AdvDisplay/Big Screen 1.png";
import BigScreen2 from "../../Assets/AdvDisplay/Big Screen 2.png";

import BigScreen3 from "../../Assets/AdvDisplay/Big Screen 3.png";

import BigScreen4 from "../../Assets/AdvDisplay/Big Screen 4.png";

import KisokScreen1 from "../../Assets/AdvDisplay/Vertical Screen 1.png";
import KisokScreen2 from "../../Assets/AdvDisplay/Vertical Screen 2.png";
import KisokScreen3 from "../../Assets/AdvDisplay/Vertical Screen 3.png";
import KisokScreen4 from "../../Assets/AdvDisplay/Vertical Screen 4.png";

import BigScreenFrame from "../../Assets/AdvDisplay/Big Screen Frame.png";

import KioskFrame from "../../Assets/AdvDisplay/Kiosk Frame.png";
import MobileFrame from "../../Assets/AdvDisplay/Mobile Frame.png";

// tab icons------------------------------
const IconRemote = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="4" width="14" height="10" rx="1.5" />
    <path d="M6 18h6M9 14v4" />
    <path d="M18 8l4-2v9l-4-2" />
  </svg>
);
const IconAngle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M7 6v12M17 6v12" />
  </svg>
);
const IconUsb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v8" />
    <circle cx="12" cy="4.5" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9 8h6l1.5 3H7.5L9 8z" />
    <path d="M12 11v6M9 20h6" />
  </svg>
);
const IconSplit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M12 5v14" />
  </svg>
);
const IconTimer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="13" r="7" />
    <path d="M12 9v4l2.5 2.5M10 2h4" />
  </svg>
);

// Small "content pushed" pulse shown near the phone on every content swap
const SignalPulse = ({ pulseKey }) => (
  <svg
    key={pulseKey}
    className="adv-signal-pulse adv-pulse-active"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 16a10 10 0 0 1 12 0M9 19a6 6 0 0 1 6 0" strokeLinecap="round" />
  </svg>
);
// ---------------- Sub-icons shown next to the big headline ----------------
const SubIconAngle = () => (
  <svg viewBox="0 0 100 60" className="adv-subicon-svg">
    <path
      d="M10 50 A 40 40 0 0 1 90 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);
const SubIconUsb = () => (
  <svg viewBox="0 0 40 40" className="adv-subicon-svg">
    <path
      d="M20 4v14M14 12l6 6 6-6M14 26h12M20 20v10"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
const SubIconTimer = () => (
  <svg viewBox="0 0 40 40" className="adv-subicon-svg">
    <circle
      cx="20"
      cy="20"
      r="16"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M20 12v8l6 4"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
const SubIconSplit = ({ step }) => (
  <div className="adv-subicon-grid" data-step={step}>
    <span className="adv-subicon-cell adv-cell-1" />
    <span className="adv-subicon-cell adv-cell-2" />
    <span className="adv-subicon-cell adv-cell-3" />
    <span className="adv-subicon-cell adv-cell-4" />
  </div>
);
const advFeatures = [
  {
    id: "remote-publishing",
    icon: <IconRemote />,
    title: "Remote Publishing",
    desc: "Update and manage display content remotely, enabling quick deployment of advertisements and information across connected screens.",
    subIcon: null,
    headline: "Update Content",
    subheadline: "in Real Time",
    showPulse: true,
    demos: [
      { screen: BigScreen1, kiosk: KisokScreen1, phone: MobileScreen1 },
      { screen: BigScreen2, kiosk: KisokScreen2, phone: MobileScreen2 },
      { screen: BigScreen3, kiosk: KisokScreen3, phone: MobileScreen3 },
      { screen: BigScreen4, kiosk: KisokScreen4, phone: MobileScreen4 },
    ],
  },
  {
    id: "viewing-angle",
    icon: <IconAngle />,
    title: "178° Wide Viewing Angle",
    desc: "Delivers clear and consistent visuals from wide viewing positions, ensuring excellent visibility for audiences from different angles.",
    subIcon: <SubIconAngle />,
    headline: "Maximum Visibility",
    subheadline: "across every view",
    showPulse: false,
    demos: [
      {
        screen: BigScreen3,
        kiosk: KisokScreen3,
      },
    ],
  },
  {
    id: "usb",
    icon: <IconUsb />,
    title: "USB Plug & Play",
    desc: "Play images, videos, and presentations directly from a USB drive without requiring additional software or complex setup.",
    subIcon: <SubIconUsb />,
    headline: "Instant Playback",
    subheadline: "in seconds",
    showPulse: false,
    demos: [
      {
        screen: BigScreen3,
        kiosk: KisokScreen3,
      },
    ],
  },
  {
    id: "split-screen",
    icon: <IconSplit />,
    title: "Smart Split Screen Display",
    desc: "Display multiple types of content simultaneously using customizable screen partitions for advertisements, announcements, videos, or images.",
    subIcon: "split", // handled specially below
    headline: "One Screen",
    subheadline: "Multiple Possibilities",
    showPulse: false,
    demos: [
      {
        screen: BigScreen2,
        kiosk: KisokScreen2,
      },
      {
        screen: BigScreen1,
        kiosk: KisokScreen1,
      },
      {
        screen: BigScreen4,
        kiosk: KisokScreen4,
      },
      {
        screen: BigScreen3,
        kiosk: KisokScreen3,
      },
    ],
  },
  {
    id: "timing-switch",
    icon: <IconTimer />,
    title: "Timing Switch",
    desc: "Schedule automatic power on/off and content playback times to simplify daily operation and improve energy efficiency.",
    subIcon: <SubIconTimer />,
    headline: "Automate",
    subheadline: "Your Display Schedule",
    showPulse: false,
    demos: [
      {
        screen: BigScreen2,
        kiosk: KisokScreen2,
      },
      {
        screen: BigScreen1,
        kiosk: KisokScreen1,
      },
      {
        screen: BigScreen4,
        kiosk: KisokScreen4,
      },
      {
        screen: BigScreen3,
        kiosk: KisokScreen3,
      },
    ],
  },
];

// Measured cadence: each feature holds for ~22s then transitions for ~0.8-1s
const FEATURE_INTERVAL = 22000;
const IMAGE_INTERVAL = 4500;
export default function TestDisplayMode() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [splitStep, setSplitStep] = useState(1);
  const [pulseKey, setPulseKey] = useState(0);

  const featureTimerRef = useRef(null);
  const imageTimerRef = useRef(null);

  const current = advFeatures[activeFeature];
  const activeDemo = current.demos[activeImage] || current.demos[0];

  const startFeatureTimer = useCallback(() => {
    clearInterval(featureTimerRef.current);
    featureTimerRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % advFeatures.length);
    }, FEATURE_INTERVAL);
  }, []);

  // Outer loop: which feature is active
  useEffect(() => {
    startFeatureTimer();
    return () => clearInterval(featureTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Inner loop: cycle demo images within the active feature; resets on feature change
  useEffect(() => {
    setActiveImage(0);
    setPrevImage(null);
    setSplitStep(1);
    setPulseKey((k) => k + 1);
    clearInterval(imageTimerRef.current);

    const demoCount = current.demos.length;
    if (demoCount > 1) {
      imageTimerRef.current = setInterval(() => {
        setActiveImage((prev) => {
          setPrevImage(prev);
          return (prev + 1) % demoCount;
        });
        setSplitStep((prev) => (prev % 4) + 1);
        setPulseKey((k) => k + 1);
      }, IMAGE_INTERVAL);
    }
    return () => clearInterval(imageTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFeature]);

  const handleSelectFeature = (index) => {
    if (index === activeFeature) return;
    setActiveFeature(index);
    startFeatureTimer();
  };
  return (
    <div className="adv-main-sec">
      {/* -------------left side bar------------------------ */}
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
                className={`adv-feature-card${
                  isActive ? " adv-feature-active" : ""
                }`}
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

      {/* -----------------Right Content--------------------------- */}
      <div className="adv-right">
        <div className="adv-mockup-wrap">
          {/* ================= BIG DISPLAY ================= */}
          <div className="adv-display-frame">
            <img
              className="adv-display-device"
              src={BigScreenFrame}
              alt="Big Screen"
            />

            <div className="adv-display-screen">
              {current.demos.map((demo, i) => {
                let cls = "";
                if (i === activeImage) cls = " adv-img-active";
                else if (i === prevImage) cls = " adv-img-leaving";

                return (
                  <img
                    key={`${current.id}-${i}`}
                    src={demo.screen}
                    alt=""
                    className={`adv-screen-img${cls}`}
                  />
                );
              })}
            </div>
          </div>

          {/* ================= KIOSK ================= */}
          <div className="adv-kiosk-frame">
            <img
              src={KioskFrame}
              className="adv-kiosk-device"
              alt="Kiosk Frame"
            />

            <div className="adv-kiosk-screen">
              {current.demos.map((demo, i) => {
                let cls = "";
                if (i === activeImage) cls = " adv-img-active";
                else if (i === prevImage) cls = " adv-img-leaving";

                return (
                  <img
                    key={`${current.id}-kiosk-${i}`}
                    src={demo.kiosk || demo.phone}
                    alt=""
                    className={`adv-screen-img${cls}`}
                  />
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE ================= */}
            {current.id === "remote-publishing" && (
              <div className="adv-mobile-frame">
                <img
                  src={MobileFrame}
                  className="adv-mobile-device"
                  alt="Mobile Frame"
                />

                <div className="adv-mobile-screen">
                  {current.demos.map((demo, i) => {
                    let cls = "";
                    if (i === activeImage) cls = " adv-img-active";
                    else if (i === prevImage) cls = " adv-img-leaving";

                    return (
                      <img
                        key={`${current.id}-phone-${i}`}
                        src={demo.phone}
                        alt=""
                        className={`adv-screen-img${cls}`}
                      />
                    );
                  })}
                </div>

                {current.showPulse && <SignalPulse pulseKey={pulseKey} />}
              </div>
               )}

        </div>

          <div key={current.id} className="adv-headline-block adv-headline-enter">
            {current.subIcon === "split" ? (
              <SubIconSplit step={splitStep} />
            ) : current.subIcon ? (
              <span className="adv-subicon">{current.subIcon}</span>
            ) : null}
            <h3 className="adv-update-text">
              {current.headline}
              <br />
              {current.subheadline}
            </h3>
          </div>
      </div>
    </div>
  );
}
