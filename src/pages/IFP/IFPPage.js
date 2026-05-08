import React, { useState } from "react";
import "./IFP Page.css";
import ifpImage from "../../Assets/ifp/IFP.png";
import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces";
import GravityAI from "../../component/GravityAI/GravityAI";
import BuiltToPerform from "../../component/Builttoperform/Builttoperform";
import MadeForCreation from "../../component/MadeForCreation/MadeForCreation";
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";
import ContactPage from "../../component/contact/ContactPage";
import ScrollVideo from "../../component/VideoScroll/ScrollVideo";
import image1Hover1 from "../../Assets/Frame 48665.png";
import image1 from "../../Assets/Frame 48665 (1).png";
import ProductModal from "../../component/modal/ProductModal";

const products = [
  {
    img: image1,
    imgHover: image1Hover1,
    name: "Qonevo IFP 65 – Core – 8/128 (CVTE | 9679)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
  },
  {
     img: image1,
    imgHover: image1Hover1,
    name: "Qonevo IFP 65 – Plus – 8/128 (Lango | V100)",
    specs: "Faster interaction with enhanced processing power",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,29,999 | ₹1,10,199",
  },
  {
     img: image1,
    imgHover: image1Hover1,
    name: "Qonevo IFP 65 – Pro – 8/128 (KTC | 311D2)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,22,999 | ₹1,05,199",
  },
  {
 img: image1,
    imgHover: image1Hover1,
    name: "Qonevo IFP 65 – Core – 16/128 (CVTE | 3576)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,05,999 | ₹89,199",
  },
];

const IFPPage = () => {
  const sizeFilters = ["65", "75", "86", "98", "110"];

  const [activeSize, setActiveSize] = useState("65");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="hero">
        {/* White curved stage */}
        <div className="hero-curve" />

        {/* ── Content ── */}
        <div className="hero-content w-100 d-flex flex-column align-items-center">
          {/* Heading */}
          <h1 className="hero-title display-3 fw-bold text-white text-center">
            The Smart Classroom. Reimagined.
          </h1>

          {/* Sub-heading */}
          <p className="hero-sub d-flex align-items-center justify-content-center gap-3 text-center mb-4">
            <span>Qonevo Interactive Flat Panel</span>
            <span className="hero-sub-divider" />
            <span>Limitless Interactive</span>
          </p>

          {/* IFP Monitor Image */}
          <div className="hero-monitor-wrap mx-auto ">
            <img
              src={ifpImage}
              alt="Qonevo Interactive Flat Panel"
              className="hero-ifp-image img-fluid d-block"
            />
          </div>
        </div>
      </section>
      <section className="scale-section">
        <h2 className="section-title">Scale Without Limits</h2>
        <p className="section-sub">
          Multiple sizes. Same powerful core. Choose your perfect fit.
        </p>
        <div className="size-filters">
          {sizeFilters.map((s) => (
            <button
              key={s}
              className={`size-btn${activeSize === s ? " active" : ""}`}
              onClick={() => setActiveSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card_ifp" key={i}>
              <div className="abstract-art">
                <img className="img-default" src={p.img} alt={p.name} />
                {p.imgHover && (
                  <img className="img-hover" src={p.imgHover} alt={p.name} />
                )}
              </div>
              <div className="product-info mt-6">
                <div className="product-name">{p.name}</div>
                <div className="product-spec">{p.specs}</div>
                <div
                  className="product-spec mt-4 mb-4"
                  style={{ color: "#aaa" }}
                >
                  {p.info}
                </div>

                <button
                className="btn-view"
                onClick={() => setSelectedProduct(p)}
              >
                View Details
              </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-wrap">
          <button className="btn-view-all">View All</button>
        </div>
      </section>
      
      <section>
        <IntelligentWorkspaces />
      </section>
      <section>
        <GravityAI />
      </section>
  {/* <section style={{ background: "#fff" }}>
  <ScrollVideo />
</section> */}
      <section>
        <BuiltToPerform />
      </section>
      <section>
        <MadeForCreation />
      </section>
      <section className="scale-section">
        <h2 className="section-title">Trusted. Recognized. Certified.</h2>
        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          <img src={logo1} alt="Google EDLA Certified" className="cert-img" />
          <img src={logo2} alt="MSME Ministry" className="cert-img" />
          <img src={logo3} alt="Startup India" className="cert-img" />
          <img src={logo4} alt="Make in India" className="cert-img" />
          <img src={logo5} alt="ISO Certified" className="cert-img" />
          <img src={logo7} alt="Google EDLA Certified" className="cert-img" />
          <img
            src={logo6}
            alt="GeM Government e-Marketplace"
            className="cert-img"
          />
        </div>
      </section>
      <section>
        <contact id="contact">
          <ContactPage />
        </contact>
      </section>
       <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default IFPPage;
