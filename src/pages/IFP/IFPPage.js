import React, { useEffect, useState,useCallback } from "react";
import "./IFP Page.css";

import ifpImage from "../../Assets/ifp/IFP.png";
import leftImg from "../../Assets/ifp/Property 1=Image01 (1).png";
import rightImg from "../../Assets/ifp/Property 1=Image02 (1).png";

import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces";
import GravityAI from "../../component/GravityAI/GravityAI";
import BuiltToPerform from "../../component/Builttoperform/Builttoperform";
import MadeForCreation from "../../component/MadeForCreation/MadeForCreation";
import ScrollCanvas from "../../component/VideoScroll/ScrollCanvas";
import ContactPage from "../../component/contact/ContactPage";
import ProductCard from "../../component/ProductCard/ProductCard";
import DetailModal from "./DetailModal";
import PageLayout from "../../layouts/PageLayout";

import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const INITIAL_LIMIT = 4;

const IFPPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [activeSize, setActiveSize] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);


  const filterProducts = useCallback(() => {
  if (!activeSize) {
    setProducts(allProducts.slice(0, INITIAL_LIMIT));
    return;
  }

  const filtered = allProducts.filter((product) =>
    product.specifications?.some((group) =>
      group.items?.some(
        (item) =>
          item.spec_key?.toLowerCase() === "size" &&
          item.spec_value === activeSize
      )
    )
  );

  setProducts(filtered.slice(0, INITIAL_LIMIT));
}, [activeSize, allProducts]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const loadData = async () => {
    try {
      setLoading(true);

      const [sizesRes, productsRes] = await Promise.all([
        axios.get(`${BASE_URL}/api/v1/products/ifp/sizes`),
        axios.get(`${BASE_URL}/api/v1/products?type=ifp`),
      ]);

      const sizes = sizesRes.data?.sizes || [];
      const allData = productsRes.data || [];

      setSizeFilters(sizes);
      setAllProducts(allData);

      // Initial display = first 4 products
      setProducts(allData.slice(0, INITIAL_LIMIT));
    } catch (error) {
      console.error("IFP Page Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize((prev) => (prev === size ? null : size));
  };

  return (
    <PageLayout className="ifp-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-curve" />

        <div className="hero-content w-100 d-flex flex-column align-items-center">
          <h1 className="hero-title text-white text-center">
            The Smart Classroom. Reimagined.
          </h1>

          <p className="hero-sub d-flex align-items-center justify-content-center gap-3 text-center mb-4">
            <span>Qonevo Interactive Flat Panel</span>
            <span className="hero-sub-divider" />
            <span>Limitless Interactive</span>
          </p>

          <div className="hero-monitor-wrap mx-auto">
            <img
              src={ifpImage}
              alt="Qonevo Interactive Flat Panel"
              className="hero-ifp-image img-fluid d-block"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ================= SIZE FILTER ================= */}
      <section className="scale-section">
        <h2 className="section-title">Scale Without Limits</h2>

        <p className="section-sub">
          Multiple sizes. Same powerful core. Choose your perfect fit.
        </p>

        <div className="size-filters">
          {sizeFilters.map((size) => (
            <button
              key={size}
              className={`size-btn sizeButton ${
                activeSize === size ? "active" : ""
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="products-loader">
            <div className="loader" />
          </div>
        ) : products.length === 0 ? (
          <p className="no-data">No Data Found...</p>
        ) : (
          <>
            <ProductCard
              products={products}
              variant="grid-4"
            />

            <div className="view-all-wrap">
              <button
                className="btn-view-all"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/listing-page");
                }}
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

      <IntelligentWorkspaces
        image1={rightImg}
        image2={leftImg}
      />

      <GravityAI />

      <ScrollCanvas />

      <BuiltToPerform />

      <MadeForCreation />

      {/* ================= TRUSTED ================= */}
      <section className="scale-section trusted-section">
        <h2 className="section-title">
          Trusted. Recognized. Certified.
        </h2>

        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          {[logo1, logo2, logo3, logo4, logo5, logo7, logo6].map(
            (logo, i) => (
              <img
                key={i}
                src={logo}
                className="cert-img"
                alt="cert"
                loading="lazy"
              />
            )
          )}
        </div>
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </PageLayout>
  );
};

export default IFPPage;