import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActiceLed.css";

import Banner from "../../Assets/ActiveLED/Banner.png";
import ContactPage from "../../component/contact/ContactPage.js";
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";
import leftBanner from "../../Assets/ActiveLED/left-banner.png";
import rightBanner from "../../Assets/ActiveLED/right-banner.png";

import icon1 from "../../Assets/ActiveLED/icon-1.png";
import icon2 from "../../Assets/ActiveLED/icon-2.png";
import icon3 from "../../Assets/ActiveLED/icon-3.png";
import icon4 from "../../Assets/ActiveLED/icon-4.png";
import icon5 from "../../Assets/ActiveLED/icon-5.png";

import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces.js";
import performanceBanner from "../../Assets/ActiveLED/performance-banner.png";
import BuiltForClarity from "../../component/BuiltForClarity/BuiltForClarity.js";
import FlexibleByDesign from "../../component/FlexibleByDesign/FlexibleByDesign.js";
import PageLayout from "../../layouts/PageLayout.jsx";
import ProductCard from "../../component/ProductCard/ProductCard.js";
import DetailModal from "../IFP/DetailModal.js";
import { useNavigate } from "react-router-dom";

const features = [
  { image: icon1, desc: "160° Viewing Angle" },
  { image: icon2, desc: "7680Hz Refresh Rate" },
  { image: icon3, desc: "Ultra High Brightness" },
  { image: icon4, desc: "HDR & Deep Contrast" },
  { image: icon5, desc: "Pixel-Level Calibration" },
];

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ActiveLed = () => {
  const sizeFilters = ["Indoor", "Outdoor"];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSize, setActiveSize] = useState("Outdoor");
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // setLoading(true);
        const type = activeSize === "Indoor" ? "INDOOR_LED" : "OUTDOOR_LED";
        const response = await axios.get(
          `${BASE_URL}/api/v1/products?type=${type}&limit=4`,
        );
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        // setLoading(false);
      }
    };

    fetchProducts();
  }, [activeSize]);

  const navigate = useNavigate();


  function redirectFunction() {
    navigate("/listing-page-Led");
  }

  return (
    <PageLayout className="main-led-container">
      <section className="led-banner">
        <div className="led-text-content">
          <h1>Active LED Displays</h1>
          <p>
            Engineered for brilliance. Built for scale. Designed to dominate
            every environment—from high-impact outdoor facades to precision
            indoor visuals.
          </p>
        </div>

        <div className="led-img-content">
          <img fetchPriority="high" src={Banner} alt="" />
        </div>
      </section>

      <section className="scale-section-led">
        <h2 className="section-title">Built for Every Environment</h2>
        <p className="section-sub">
          Precision-built indoor and outdoor solutions.
        </p>
        <div className="size-filters">
          {sizeFilters.map((s) => (
            <button
              key={s}
              className={`size-btn${activeSize === s ? " active" : ""} sizeButton`}
              onClick={() => setActiveSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <ProductCard products={products} variant="grid-4" />
        <div className="view-all-wrap">
          <button onClick={redirectFunction} className="btn-view-all">
            View All
          </button>
        </div>
      </section>

      <DetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <section className="indoor-outdoor">
        <IntelligentWorkspaces image1={rightBanner} image2={leftBanner} />
      </section>

      <section className="led-performance-sec">
        <div className="led-performance-content">
          <div className="led-text-content-pf">
            <h3>Performance that shows</h3>
            <p>Enhance user interaction with intelligent features</p>
          </div>

          <div className="image-container-pf">
            <img
              loading="lazy"
              src={performanceBanner}
              alt="LED display performance showcase"
            />
          </div>

          <div className="features-container">
            {features.map((item, index) => (
              <div className="features-item" key={index}>
                <div className="features-icon">
                  <img loading="lazy" src={item.image} alt={item.desc} />
                </div>

                <div className="features-text">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="build-for-clarity">
        <BuiltForClarity />
      </section>
      <br />
      <br />
      <section className="flexible-by-design">
        <FlexibleByDesign />
      </section>

      <section className="certification-sec scale-section">
        <h2 className="section-title">Trusted. Recognized. Certified.</h2>
        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          <img
            src={logo1}
            alt="Google EDLA Certified"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo2}
            alt="MSME Ministry"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo3}
            alt="Startup India"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo4}
            alt="Make in India"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo5}
            alt="ISO Certified"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo7}
            alt="Google EDLA Certified"
            className="cert-img"
            loading="lazy"
          />
          <img
            src={logo6}
            alt="GeM Government e-Marketplace"
            className="cert-img"
            loading="lazy"
          />
        </div>
      </section>

      <section className="lets-connect">
        <ContactPage />
      </section>
    </PageLayout>
  );
};

export default ActiveLed;
