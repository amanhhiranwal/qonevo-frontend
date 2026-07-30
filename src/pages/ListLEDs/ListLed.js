import React, { useEffect, useState, useRef } from "react";
import banner from "../../Assets/ListingPage/banner.png";
import "../ListingPage/ListingPage.css";
import axios from "axios";
import ProductCard from "../../component/ProductCard/ProductCard.js";
import PageLayout from "../../layouts/PageLayout.jsx";
import FilterSideBar from "../../component/FilterSideBar/FilterSideBar.jsx";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ListLed = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const layoutRef = useRef(null);
  const rightRef = useRef(null);
  const loadMoreRef = useRef(null);

  const ITEMS_PER_LOAD = 4;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleProducts = products.slice(0, visibleCount);

  // =====================================
  // FILTER OPTIONS FOR LED DISPLAYS
  // =====================================

  const [filterOptions, setFilterOptions] = useState({
    ledTypes: ["Indoor LED", "Outdoor LED"],
    pixelPitches: [],
    brightness: [],
    refreshRates: [],
  });

  // =====================================
  // ACTIVE FILTERS
  // =====================================

  const [filters, setFilters] = useState({
    type: [],
    pixel_pitch: [],
    brightness: [],
    refresh_rate: [],
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  // Helper to extract specification value by key across categories
  const getSpecValue = (product, key) => {
    if (!product?.specifications) return null;
    for (const section of product.specifications) {
      const item = section.items?.find(
        (i) => i.spec_key?.toLowerCase() === key.toLowerCase()
      );
      if (item && item.spec_value) return item.spec_value;
    }
    return null;
  };

  // =====================================
  // LOAD PRODUCTS (INDOOR & OUTDOOR LED)
  // =====================================

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/products?type=INDOOR_LED&type=OUTDOOR_LED`
        );

        const data = response.data || [];
        setProducts(data);
        setAllProducts(data);
        setVisibleCount(ITEMS_PER_LOAD);
      } catch (error) {
        console.log("Products API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // =====================================
  // EXTRACT DEPENDENT FILTER OPTIONS
  // Only reveal child filters once Panel Type is selected
  // =====================================

  useEffect(() => {
    if (!allProducts.length) return;

    // Available Panel Types
    const types = ["Indoor LED", "Outdoor LED"];

    // Only populate child specifications if a panel type is selected
    if (!filters.type || filters.type.length === 0) {
      setFilterOptions({
        ledTypes: types,
        pixelPitches: [],
        brightness: [],
        refreshRates: [],
      });
      return;
    }

    // Filter products matching selected type(s)
    const selectedTypeProducts = allProducts.filter((p) => {
      const typeName =
        p.product_type === "INDOOR_LED"
          ? "Indoor LED"
          : p.product_type === "OUTDOOR_LED"
          ? "Outdoor LED"
          : "";
      return filters.type.includes(typeName);
    });

    const pitches = new Set();
    const brightnesses = new Set();
    const refreshRates = new Set();

    selectedTypeProducts.forEach((p) => {
      const pitch = getSpecValue(p, "Pixel Pitch (mm)");
      if (pitch) pitches.add(pitch);

      const bright =
        getSpecValue(p, "Brightness (cd/m²)") ||
        getSpecValue(p, "White Balance Brightness (nits)");
      if (bright) brightnesses.add(bright);

      const refresh = getSpecValue(p, "Refresh Rate (Hz)");
      if (refresh) refreshRates.add(refresh);
    });

    setFilterOptions({
      ledTypes: types,
      pixelPitches: Array.from(pitches),
      brightness: Array.from(brightnesses),
      refreshRates: Array.from(refreshRates),
    });
  }, [allProducts, filters.type]);

  // =====================================
  // APPLY FILTERS TO PRODUCT LIST
  // =====================================

  useEffect(() => {
    const filtered = allProducts.filter((p) => {
      const typeName =
        p.product_type === "INDOOR_LED"
          ? "Indoor LED"
          : p.product_type === "OUTDOOR_LED"
          ? "Outdoor LED"
          : "";

      const typeOk = !filters.type?.length || filters.type.includes(typeName);

      const pitchValue = getSpecValue(p, "Pixel Pitch (mm)");
      const pitchOk =
        !filters.pixel_pitch?.length ||
        (pitchValue && filters.pixel_pitch.includes(pitchValue));

      const brightValue =
        getSpecValue(p, "Brightness (cd/m²)") ||
        getSpecValue(p, "White Balance Brightness (nits)");
      const brightOk =
        !filters.brightness?.length ||
        (brightValue && filters.brightness.includes(brightValue));

      const refreshValue = getSpecValue(p, "Refresh Rate (Hz)");
      const refreshOk =
        !filters.refresh_rate?.length ||
        (refreshValue && filters.refresh_rate.includes(refreshValue));

      return typeOk && pitchOk && brightOk && refreshOk;
    });

    setProducts(filtered);
    setVisibleCount(ITEMS_PER_LOAD);
  }, [filters, allProducts]);

  // =====================================
  // INFINITE SCROLL
  // =====================================

  useEffect(() => {
    const el = loadMoreRef.current;

    if (!el) return;

    if (visibleCount >= products.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + ITEMS_PER_LOAD, products.length)
          );
        }
      },
      {
        rootMargin: "0px 0px 300px 0px",
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [visibleCount, products.length]);

  return (
    <PageLayout className="listing-container">
      <div className="listing-container">
        <div className="listing-banner">
          <img
            height={banner.height}
            width={banner.width}
            src={banner}
            alt="Listing Page"
            fetchPriority="high"
          />

          <div className="listing-banner-text">
            <h1>LED Display Panels</h1>

            <p>Indoor & Outdoor High Performance LED Displays</p>
          </div>
        </div>

        <div className="listing-content">
          <div className="listing-layout" ref={layoutRef}>
            <div className="listing-sidebar">
              <FilterSideBar
                onFilterChange={handleFilterChange}
                filterOptions={filterOptions}
              />
            </div>

            <div ref={rightRef} className="right-listing-content">
              {loading ? (
                <div className="products-loader">
                  <div className="loader"></div>
                </div>
              ) : products.length === 0 ? (
                <p className="no-data">No Data Found...</p>
              ) : (
                <>
                  <ProductCard products={visibleProducts} variant="grid-3" />

                  {visibleProducts.length < products.length && (
                    <div ref={loadMoreRef} className="load-more-trigger">
                      <div className="loader"></div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ListLed;
