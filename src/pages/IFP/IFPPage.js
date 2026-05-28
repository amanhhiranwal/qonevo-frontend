import React, { useEffect, useState } from "react";
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
import ScrollCanvas from "../../component/VideoScroll/ScrollCanvas";
import DetailModal from "./DetailModal";
import leftImg from "../../Assets/ifp/Property 1=Image01 (1).png";
import rightImg from "../../Assets/ifp/Property 1=Image02 (1).png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const LIMIT = 4;

const IFPPage = () => {
  const sizeFilters = ["65", "75", "86", "98", "110"];

  const [activeSize, setActiveSize] = useState("65");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/products?limit=${LIMIT}`,
          {
            timeout: 5000,
          },
        );

        setProducts(response.data || []);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="hero">
        {/* White curved stage */}
        <div className="hero-curve" />

        {/* ── Content ── */}
        <div className="hero-content w-100 d-flex flex-column align-items-center">
          {/* Heading */}
          <h1 className="hero-title text-white text-center">
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
              className={`size-btn${activeSize === s ? " active" : ""} sizeButton`}
              onClick={() => setActiveSize(s)}
            >
              {s}"
            </button>
          ))}
        </div>

        {loading ? (
          <div className="products-loader">
            <div className="loader"></div>
          </div>
        ) : products.length === 0 ? ( 
          <p className="no-data">No Data Found...</p>
        ) : (
          <>
            <ProductCard products={products} />
            <div className="view-all-wrap">
              <button
                onClick={() => navigate("/listing-page")}
                className="btn-view-all"
              >
                View All
              </button>
            </div>
          </>
        )}
      </section>
      <DetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <section>
        <IntelligentWorkspaces image1={rightImg} image2={leftImg} />
      </section>
      <section>
        <GravityAI />
      </section>
      <section>
        {/* <ScrollVideo /> */}
        <ScrollCanvas />
      </section>
      <section>
        <BuiltToPerform />
      </section>
      <section>
        <MadeForCreation />
      </section>
      <section className="scale-section trusted-section">
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
        <section id="contact">
          <ContactPage />
        </section>
      </section>
    </>
  );
};

export default IFPPage;
