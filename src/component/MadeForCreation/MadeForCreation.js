import React, { useState, useEffect, useRef } from "react";
import "../../component/Builttoperform/BuiltToPerform.css"
import image1 from "../../Assets/madeforcreation/Image04 (2).png";
import image2 from "../../Assets/madeforcreation/Image05.png";
import image3 from "../../Assets/madeforcreation/Image06.png";

const INTERVAL = 2000;



const features = [
  {
    title: "Natural Writing Experience",
    desc: "Smooth, precise writing with zero lag",
    image: image1,
  },
  {
    title: "Gravity AI Whiteboarding",
    desc: "Smart tools that organize and enhance every idea",
    image: image2,
  },
  {
    title: "Voice Capture & Clarity",
    desc: "Advanced mic array guarantees clear communication",
    image: image3,
  },
];

export default function MadeForCreation() {

    const [activeFeature, setActiveFeature] = useState(0);
      const [prevSrc, setPrevSrc] = useState(features[0].image);
     
    
      const timerRef = useRef(null);
      const animEndRef = useRef(null);
      const imgTopRef  = useRef(null);
    

    
    const slideCountRef = useRef(0);
    
    const switchTo = (index) => {
      const incoming = features[index].image;
      const imgTop = imgTopRef.current;
      if (!imgTop) return;
    
      // alternate direction every transition
      const slideUp = slideCountRef.current % 2 === 0;
      slideCountRef.current++;
    
      // 1. reset instantly — position above or below screen
      imgTop.style.transition = 'none';
      if (slideUp) {
        imgTop.style.top = 'auto';
        imgTop.style.bottom = '-100%';  // start below
      } else {
        imgTop.style.bottom = 'auto';
        imgTop.style.top = '-100%';     // start above
      }
      imgTop.src = incoming;
    
      // 2. slide into view
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          imgTop.style.transition = 'top 1.1s cubic-bezier(0.76, 0, 0.24, 1), bottom 1.1s cubic-bezier(0.76, 0, 0.24, 1)';
          if (slideUp) {
            imgTop.style.bottom = '0%';
          } else {
            imgTop.style.top = '0%';
          }
        });
      });
    
      // 3. after animation: swap bottom, reset top off screen
      clearTimeout(animEndRef.current);
      animEndRef.current = setTimeout(() => {
        setPrevSrc(incoming);
        if (imgTopRef.current) {
          imgTopRef.current.style.transition = 'none';
          imgTopRef.current.style.top = 'auto';
          imgTopRef.current.style.bottom = '-100%';
        }
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
     
      <section className="btp-section-made-for-creation">
        <div className="container-fluid px-0">
          <div className="row g-5 align-items-center">

            {/* LEFT: Content */}
             <div className="col-lg-7 col-md-6 btp-images-col">
              <div className="btp-monitor-wrapper">
              

                <div className="btp-screen-container">

                  {/* Bottom layer: previous image — sits still while new one comes in over it */}
                  <img
                    src={prevSrc}
                    alt="previous feature"
                    className="btp-screen-img btp-img-bottom"
                  />

                  {/* Top layer: new image — slides up over the old one with fadeInUp */}
                  
                    <img 
                      ref={imgTopRef}
                      src=""
                      alt="next feature"
                      className="btp-screen-img btp-img-top"
                    />
               

                </div>

                
              </div>
            </div>
          

            {/* RIGHT: Monitor */}
           

              <div className="col-lg-5 col-md-6 btp-content-col">
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
                    <div className={`btp-feature-bar${activeFeature === i ? " active" : ""}`} />
                    <div style={{ width: "100%" }}>
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
    </>
  );
}