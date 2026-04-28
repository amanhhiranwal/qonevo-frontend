import React, { useState, useEffect, useRef } from "react";
import "./BuiltToPerform.css";

const INTERVAL = 2000;

const styles = `
  .btp-progress-fill {
    height: 100%;
    background: #1a2b4a;
    border-radius: 2px;
    animation: btpProgress ${INTERVAL}ms linear forwards;
  }
`;

const features = [
  {
    title: "4K UHD Display",
    desc: "Clear visuals and vibrant detail for better visibility and engagement",
    image: "https://images.unsplash.com/photo-1527443224154-c4a573d93f19?w=900&q=80",
  },
  {
    title: "Anti-Glare Screen",
    desc: "Reduced reflections for uninterrupted visibility",
    image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=900&q=80",
  },
  {
    title: "Built-in Camera & Mic",
    desc: "Clear video and voice without external devices",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80",
  },
];

export default function BuiltToPerform() {
  const [activeFeature, setActiveFeature] = useState(0);
  

  // prevSrc = old image sitting still on bottom layer
  // nextSrc = new image animating in on top layer
  // animKey = forces remount of top layer to replay animate.css
  const [prevSrc, setPrevSrc] = useState(features[0].image);
  const [nextSrc, setNextSrc] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const timerRef = useRef(null);
  const animEndRef = useRef(null);

  const switchTo = (index) => {
    

    const incoming = features[index].image;

    // Put new image on top with fadeInUp
    setNextSrc(incoming);
    setAnimKey((k) => k + 1);

    // After animation ends, promote top to bottom and clear top
    clearTimeout(animEndRef.current);
    animEndRef.current = setTimeout(() => {
      setPrevSrc(incoming);
      setNextSrc(null);
    }, 700); // matches --animate-duration 0.65s + small buffer
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
    startTimer();
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(animEndRef.current);
    };
  }, []);

  const handleFeatureClick = (fi) => {
    if (fi === activeFeature) return;
    clearInterval(timerRef.current);
    setActiveFeature(fi);
    switchTo(fi);
    startTimer();
  };

  return (
    <>
      <style>{styles}</style>
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
                    <div className={`btp-feature-bar${activeFeature === i ? " active" : ""}`} />
                    <div style={{ width: "100%" }}>
                      <div className="btp-feature-title">{f.title}</div>
                      <p className="btp-feature-desc">{f.desc}</p>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Monitor */}
            <div className="col-lg-7 col-md-6 btp-images-col">
              <div className="btp-monitor-wrapper">
              

                <div className="btp-screen-container-">

                  {/* Bottom layer: previous image — sits still while new one comes in over it */}
                  <img
                    src={prevSrc}
                    alt="previous feature"
                    className="btp-screen-img btp-img-bottom"
                  />

                  {/* Top layer: new image — slides up over the old one with fadeInUp */}
                  {nextSrc && (
                    <img
                      key={animKey}
                      src={nextSrc}
                      alt="next feature"
                      className="btp-screen-img btp-img-top animate__animated animate__fadeInUp"
                    />
                  )}

                </div>

                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}