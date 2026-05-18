import React from "react";
import "./ProductPage.css";
import banner from "../../Assets/product-page/product-page-banner.png";
import swipeIcon from "../../Assets/product-page/swipe-icon.svg";
import touchImg from "../../Assets/product-page/touch-img.png";
import pointerIcon from "../../Assets/product-page/pointer-icon.svg";
import microphoneIcon from "../../Assets/product-page/microphone.svg"; 
import performanceBgImg from "../../Assets/product-page/performance-bg-img.png"

const ProductPage = () => {
  return (
    <div>
      {/* hero section */}
      <section className="hero-sec">
        <div className="overlay-text">
          <h2>The Smart Classroom. Reimagined.</h2>
          <p>Qonevo Interactive Flat Panel | Limitless Interactive</p>
        </div>

        <div className="hero-img-container">
          <img src={banner} alt="" />
        </div>
      </section>

      {/* feature section */}
      <section className="feature-sec">
        <div className="top-container">
          <div className="accuracy-sec">
            <div className="icon">
              <img src={swipeIcon} alt="Swipe" />
            </div>
            <div className="text">
              <h3>High Touch Point Accuracy</h3>
              <p>
                Multiple users can interact simultaneously without lag, making
                group collaboration smooth and natural
              </p>
            </div>
          </div>
          <div className="touch-sec">
            <img src={touchImg} alt="Touch" />
          </div>
        </div>

        <div className="bottom-container">
          <div className="sensitivity-sec">
            <div className="icon">
              <img src={pointerIcon} alt="Swipe" />
            </div>
            <div className="text">
              <h3>Advanced Pressure Sensitivity</h3>
              <p>
                Write, draw, and annotate with precision that feels just like pen on paper, enabling natural handwriting and creative expression.
              </p>
            </div>
          </div>
          <div className="microphone-sec">
              <div className="icon">
              <img src={microphoneIcon} alt="Swipe" />
            </div>
            <div className="text">
              <h3>Integrated Microphone Array</h3>
              <p>
                Capture clear audio during virtual sessions, lectures, and meetings without the need for external devices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* performance and gravity section */}
      <section className="performance-gravity-sec">

        <div className="performance-text">
          <h2>Powered by a High-Performance Chipset</h2>
          <p>At the core of every Qonevo display is a powerful chipset designed to handle intensive tasks with ease.</p>
          <div className="performance-list">
            <li> <span className="blue-line"></span> <span>Faster processing for smooth operations</span></li>
            <li> <span className="blue-line"></span> <span>Efficient multitasking without slowdowns</span></li>
            <li> <span className="blue-line"></span> <span>Optimized performance for interactive applications</span></li>
          </div>
        </div>
            <div className="bd-img-container">
                <img src={performanceBgImg} alt="Performance-bg-image" className="bg-img" />


            </div>

      </section>
      <section className="gravity-sec">
        <div className="gravity-sub-sec">
            <div className="gravity-text"></div>
            <div className="gravity-img"></div>
        </div>
      </section>
      
      {/* smart classroom section */}
      <section className="smart-classroom-sec"></section>
      {/* power and presence section */}
      <section className="power-presence-sec"></section>
      {/* specification section */}
      <section className="specification-sec"></section>
    </div>
  );
};

export default ProductPage;
