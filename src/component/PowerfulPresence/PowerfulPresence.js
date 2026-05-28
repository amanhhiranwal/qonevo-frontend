import React, { useRef, useState, useCallback, useEffect } from "react";
import "./PowerfulPresence.css";

import baseImg from "../../Assets/product-page/presence-base-img.png";
import overlayImg from "../../Assets/product-page/presence-overlay-img.png";
import leftArrow from "../../Assets/product-page/left-arrow.svg";
import rightArrow from "../../Assets/product-page/right-arrow.svg";

const EDGE_OFFSET_PX = 194;


// AFTER — returns different px based on container width
// const getEdgeOffsetPx = (containerWidth) => {
//   if (containerWidth >= 1024) return 194;  // desktop — same as before
//   if (containerWidth >= 768)  return 120;  // tablet
//   if (containerWidth >= 480)  return 60;   // large mobile
//   return 24;                               // small mobile
// };

const PowerfulPresence = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const animFrameRef = useRef(null);
  const positionRef = useRef(null);

  const [sliderPosition, setSliderPosition] = useState(null);

  /* ========================================
     CLAMP HELPERS
  ======================================== */

  const getMinMax = useCallback(() => {
    if (!containerRef.current) return { min: 0, max: 100 };
    const { width } = containerRef.current.getBoundingClientRect();
    const min = (EDGE_OFFSET_PX / width) * 100;
    const max = 100 - min;
    return { min, max };
  }, []);

  const clamp = useCallback(
    (value) => {
      const { min, max } = getMinMax();
      return Math.max(min, Math.min(max, value));
    },
    [getMinMax]
  );

  /* ========================================
     SET POSITION
  ======================================== */

  const applyPosition = useCallback((pos) => {
    positionRef.current = pos;
    setSliderPosition(pos);
  }, []);

  /* ========================================
     MEASURE ON MOUNT & RESIZE
  ======================================== */

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const { width } = containerRef.current.getBoundingClientRect();
      applyPosition((EDGE_OFFSET_PX / width) * 100);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [applyPosition]);

  /* ========================================
     DERIVED STATE
  ======================================== */

  const { min, max } = getMinMax();
  const midpoint = (min + max) / 2;

  const activeTab =
    sliderPosition === null || sliderPosition <= midpoint ? "silver" : "black";

  // At min (left) → show rightArrow (invite drag right)
  // At max (right) → show leftArrow (invite drag left)
  // showRight = true while slider is on the left half
  const showRight =
    sliderPosition === null || sliderPosition <= midpoint;

  /* ========================================
     ANIMATE TO TARGET
  ======================================== */

  const animateTo = useCallback(
    (targetPosition) => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      const clamped = clamp(targetPosition);
      const duration = 480;
      const startTime = performance.now();
      const startPosition = positionRef.current ?? clamped;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        applyPosition(startPosition + (clamped - startPosition) * eased);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          applyPosition(clamped);
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(animate);
    },
    [clamp, applyPosition]
  );

  /* ========================================
     HANDLE MOVE
  ======================================== */

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const raw = ((clientX - rect.left) / rect.width) * 100;
      applyPosition(clamp(raw));
    },
    [clamp, applyPosition]
  );

  /* ========================================
     SNAP ON RELEASE
  ======================================== */

  const handleRelease = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const current = positionRef.current ?? 50;
    const { min, max } = getMinMax();
    const mid = (min + max) / 2;
    animateTo(current >= mid ? max : min);
  }, [animateTo, getMinMax]);

  /* ========================================
     DOCUMENT-LEVEL MOUSE EVENTS
  ======================================== */

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };
    const onMouseUp = () => handleRelease();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [handleMove, handleRelease]);

  /* ========================================
     CONTAINER MOUSE DOWN
  ======================================== */

  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isDragging.current = true;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  /* ========================================
     TOUCH EVENTS
  ======================================== */

  const handleTouchStart = useCallback(
    (e) => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isDragging.current = true;
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleRelease();
  }, [handleRelease]);

  /* ========================================
     TAB CLICK
  ======================================== */

  const handleTabClick = useCallback(
    (tab) => {
      const { min, max } = getMinMax();
      animateTo(tab === "silver" ? min : max);
    },
    [animateTo, getMinMax]
  );

  if (sliderPosition === null) {
    return (
      <section className="powerful-presence-sec">
        <div className="container-main">
          <div className="image-container" ref={containerRef} />
        </div>
      </section>
    );
  }

  return (
    <section className="powerful-presence-sec">
      <div className="container-main">
        {/* TEXT CONTENT */}
        <div className="text-container">
          <h3>Two Finishes. One Powerful Presence.</h3>
          <p>
            Seamlessly blend into modern classrooms, training rooms, and
            corporate environments.
          </p>
        </div>

        {/* TOGGLE TABS */}
        <div className="toggle-tabs">
          <button
            className={`tab ${activeTab === "silver" ? "active" : ""}`}
            onClick={() => handleTabClick("silver")}
          >
            <span className="dot silver-dot"></span>
            Silver
          </button>
          <button
            className={`tab ${activeTab === "black" ? "active" : ""}`}
            onClick={() => handleTabClick("black")}
          >
            <span className="dot black-dot"></span>
            Black
          </button>
        </div>

        {/* IMAGE COMPARISON */}
        <div
          className="image-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* RIGHT IMAGE — always full width, sits behind */}
          <div className="right-image-wrapper">
            <img src={baseImg} alt="Black Finish" draggable={false} />
          </div>

          {/* LEFT IMAGE — clipped to slider position */}
          <div
            className="left-image-wrapper"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={overlayImg} alt="Silver Finish" draggable={false} />
          </div>

          {/* DIVIDER + BAR */}
          <div
            className="slider-divider"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* 2px white line */}
            <div className="slider-bar" aria-hidden="true" />

            {/* Circle handle — crossfades between left/right arrow */}
            <div className="slider-chevron">

              {/* Right arrow — visible when at left side */}
              <img
                src={rightArrow}
                alt=""
                className={`chevron-icon ${showRight ? "chevron-visible" : "chevron-hidden"}`}
                draggable={false}
              />

              {/* Left arrow — visible when at right side */}
              <img
                src={leftArrow}
                alt=""
                className={`chevron-icon ${!showRight ? "chevron-visible" : "chevron-hidden"}`}
                draggable={false}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulPresence;