import React, { useEffect, useState } from "react";
import "./IFP Page.css";

// ── Assets ────────────────────────────────────────────────────────────────────
import ifpImage from "../../Assets/ifp/IFP.png";
import leftImg  from "../../Assets/ifp/Property 1=Image01 (1).png";
import rightImg from "../../Assets/ifp/Property 1=Image02 (1).png";

import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";

// ── Components ────────────────────────────────────────────────────────────────
import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces";
import GravityAI             from "../../component/GravityAI/GravityAI";
import BuiltToPerform        from "../../component/Builttoperform/Builttoperform";
import MadeForCreation       from "../../component/MadeForCreation/MadeForCreation";
// import ScrollCanvas          from "../../component/VideoScroll/ScrollCanvas";
import ContactPage           from "../../component/contact/ContactPage";
import ProductCard           from "../../component/ProductCard/ProductCard";
import DetailModal           from "./DetailModal";
import PageLayout            from "../../layouts/PageLayout";

import axios           from "axios";
import { useNavigate } from "react-router-dom";

// ── Constants ─────────────────────────────────────────────────────────────────
const BASE_URL   = process.env.REACT_APP_BASE_URL;
const LOOKAHEAD  = 2; // pages to pre-generate ahead of current

const getItemsPerPage = () => {
  if (window.innerWidth < 768)  return 1;
  if (window.innerWidth < 1200) return 2;
  return 4;
};

// ── Static fallback data (used while API is commented out) ────────────────────


// ── Pure helper ───────────────────────────────────────────────────────────────
// Appends `count` new pages to `existingPages`, starting at logical page index
// `fromPage`. Items are drawn from `allItems` with wrap-around (% length).
const generatePages = (existingPages, allItems, fromPage, count) => {
  const n        = allItems.length;
  const newPages = [...existingPages];

  for (let p = fromPage; p < fromPage + count; p++) {
    const page = [];
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      const globalIndex = p * ITEMS_PER_PAGE + i;
      page.push(allItems[globalIndex % n]);
    }
    newPages.push(page);
  }

  return newPages;
};

// ── Module-level constant (after helper so ITEMS_PER_PAGE is defined) ─────────
const ITEMS_PER_PAGE = getItemsPerPage();

// =============================================================================
// IFPPage Component
// =============================================================================
const IFPPage = () => {
  // ── State ──────────────────────────────────────────────────────────────────
  const [products, setProducts]               = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading]                 = useState(true);
  const [currentPage, setCurrentPage]         = useState(0);
  const [pages, setPages]                     = useState([]);

  const navigate = useNavigate();

  // ── Seed pages whenever the products list changes ──────────────────────────
  useEffect(() => {
    if (products.length === 0) return;
    setPages(generatePages([], products, 0, LOOKAHEAD + 1));
    setCurrentPage(0);
  }, [products]);

  // ── Navigation ─────────────────────────────────────────────────────────────
  const nextProducts = () => {
    const nextPage = currentPage + 1;

    // Pre-generate more pages before we run out
    if (nextPage + LOOKAHEAD >= pages.length) {
      setPages((prev) =>
        generatePages(prev, products, prev.length, LOOKAHEAD + 1)
      );
    }

    setCurrentPage(nextPage);
  };

  const prevProducts = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  // ── Data fetch ─────────────────────────────────────────────────────────────
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const productsRes = await axios.get(`${BASE_URL}/api/v1/products?type=ifp`);
      const allData = productsRes.data || [];
      setProducts(allData);

      // ── Static fallback ────────────────────────────────────────────────────

    } catch (error) {
      console.error("IFPPage — loadData error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <PageLayout className="ifp-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
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
            height={ifpImage.height}
            width={ifpImage.width}
              src={ifpImage}
              alt="Qonevo Interactive Flat Panel"
              className="hero-ifp-image img-fluid d-block"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ── Product Carousel ──────────────────────────────────────────────── */}
      <section className="scale-section">
        <h2 className="section-title">Scale Without Limits</h2>
        <p className="section-sub">
          Multiple sizes. Same powerful core. Choose your perfect fit.
        </p>

        {loading ? (
          <div className="products-loader">
            <div className="loader" />
          </div>
        ) : products.length === 0 ? (
          <p className="no-data">No Data Found...</p>
        ) : (
          <>
            <div className="products-slider-ifp">

              <button
                className="slider-arrow-ifp left"
                onClick={prevProducts}
                disabled={currentPage === 0}
              >
                &#10094;
              </button>

              <div className="products-window-ifp">
                <div
                  className="products-track-ifp"
                  style={{
                    transform:  `translateX(-${currentPage * 100}%)`,
                    transition: "transform 0.4s ease",
                  }}
                >
                  {pages.map((page, index) => (
                    <div className="page-ifp" key={index}>
                      <ProductCard
                        products={page}
                        variant="grid-4"
                        setSelectedProduct={setSelectedProduct}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* next is never disabled — carousel is infinite */}
              <button
                className="slider-arrow-ifp right"
                onClick={nextProducts}
              >
                &#10095;
              </button>

            </div>

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

      {/* ── Detail Modal ──────────────────────────────────────────────────── */}
      <DetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* ── Feature Sections ──────────────────────────────────────────────── */}
      <IntelligentWorkspaces image1={rightImg} image2={leftImg} />
      <GravityAI />
      {/* <ScrollCanvas /> */}
      <BuiltToPerform />
      <MadeForCreation />

      {/* ── Trust / Certification Logos ───────────────────────────────────── */}
      <section className="scale-section trusted-section">
        <h2 className="section-title">Trusted. Recognized. Certified.</h2>
        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          {[logo1, logo2, logo3, logo4, logo5, logo7, logo6].map((logo, i) => (
            <img height={logo.height} width={logo.width} key={i} src={logo} className="cert-img" alt="cert" loading="lazy" />
          ))}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id="contact">
        <ContactPage />
      </section>
    </PageLayout>
  );
};

export default IFPPage;