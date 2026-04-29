import React, { useState } from "react";
import "./IFP Page.css";
import ifpImage from "../../Assets/ifp/IFP.png";
import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces";
import GravityAI from "../../component/GravityAI/GravityAI";
import BuiltToPerform from "../../component/Builttoperform/Builttoperform";



const products = [
  {
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=200&fit=crop",
    name: "Qonevo IFP 65 – Core – 8/128 (CVTE | 9679)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,00,999 | ₹86,199",
  },
  {
    img: "https://images.unsplash.com/photo-1593642632632-9eb77a8278a0?w=300&h=200&fit=crop",
    name: "Qonevo IFP 65 – Plus – 8/128 (Lango | V100)",
    specs: "Faster interaction with enhanced processing power",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,29,999 | ₹1,10,199",
  },
  {
    img: "https://images.unsplash.com/photo-1593642634624-e8fac7d5b37b?w=300&h=200&fit=crop",
    name: "Qonevo IFP 65 – Pro – 8/128 (KTC | 311D2)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,22,999 | ₹1,05,199",
  },
  {
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=300&h=200&fit=crop",
    name: "Qonevo IFP 65 – Core – 16/128 (CVTE | 3576)",
    specs: "Standard performance for everyday teaching and presentations",
    info: "4K UHD | 400 nits | 200W * 2",
    // price: "₹1,05,999 | ₹89,199",
  },
];

const IFPPage = () => {
    const sizeFilters = ["65", "75", "86", "98", "110"];

    const [activeSize, setActiveSize] = useState('65');


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
        <p className="section-sub">Multiple sizes. Same powerful core. Choose your perfect fit.</p>
        <div className="size-filters">
          {sizeFilters.map(s => (
            <button key={s} className={`size-btn${activeSize === s ? " active" : ""}`} onClick={() => setActiveSize(s)}>{s}</button>
          ))}
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card_ifp" key={i}>
              <div className="abstract-art" style={{ aspectRatio: "16/10", background: `linear-gradient(${135 + i * 40}deg, #${["ff6b6b","feca57","ff9ff3","54a0ff"][i]}88 0%, #5f27cd88 100%)` }} />
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-spec">{p.specs}</div>
                <div className="product-spec" style={{ color: "#aaa" }}>{p.info}</div>
                <div className="product-price">{p.price}</div>
                <button className="btn-view">View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <button className="btn-view-all">View All</button>
        </div>
      </section>
      <section>
        <IntelligentWorkspaces/>
      </section>
      <section>
        <GravityAI/>
      </section>
      <section>
        <BuiltToPerform/>
      </section>
      </>
  );
};

export default IFPPage;