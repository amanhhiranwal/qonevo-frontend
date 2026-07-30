import React from "react";
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
import { useState } from "react";
import leftBanner from "../../Assets/ActiveLED/left-banner.png";
import rightBanner from "../../Assets/ActiveLED/right-banner.png";

import icon1 from "../../Assets/ActiveLED/icon-1.png";
import icon2 from "../../Assets/ActiveLED/icon-2.png";
import icon3 from "../../Assets/ActiveLED/icon-3.png";
import icon4 from "../../Assets/ActiveLED/icon-4.png";
import icon5 from "../../Assets/ActiveLED/icon-5.png";

// import image1 from "../../Assets/Frame48665_1.png";
// import image1Hover1 from "../../Assets/Frame 48665.png";

import prodImg1 from "../../Assets/ProductCard/img1.png";
import prodImg2 from "../../Assets/ProductCard/img2.png";

import DetailModal from "../IFP/DetailModal.js";
import IntelligentWorkspaces from "../../component/sliderImage/IntelligentWorkspaces.js";

import performanceBanner from "../../Assets/ActiveLED/performance-banner.png";
// import ScrollCanvas from "../../component/VideoScroll/ScrollCanvas.js";

import BuiltForClarity from "../../component/BuiltForClarity/BuiltForClarity.js";
import FlexibleByDesign from "../../component/FlexibleByDesign/FlexibleByDesign.js";

import ProductCard from "../../component/ProductCard/ProductCard.js";
import PageLayout from "../../layouts/PageLayout.jsx";

const features = [
  { image: icon1, desc: "160° Viewing Angle" },
  { image: icon2, desc: "7680Hz Refresh Rate" },
  { image: icon3, desc: "Ultra High Brightness" },
  { image: icon4, desc: "HDR & Deep Contrast" },
  { image: icon5, desc: "Pixel-Level Calibration" },
];

const products = [
  {
  id: 1,
  name: "Qonevo IFP 65 – Core",
  slug: "qonevo-ifp-65-core",
  subheading: "Standard performance for classrooms and presentations",
  size: "65",
  chipset: "CVTE",
  storage: "128GB",
  resolution: "4K UHD",
  google_integration: true,
  is_active: true,

  thumbnail:
    prodImg1,

  images: [
    {
      id: 101,
      product_id: 1,
      image_url:
        prodImg2,
      is_primary: true,
      created_at: "2026-05-27T10:00:00.000000Z",
    },
    {
      id: 102,
      product_id: 1,
      image_url:
        prodImg1,
      is_primary: false,
      created_at: "2026-05-27T10:00:01.000000Z",
    },
  ],

  specifications: [
    {
      category: "Display",
      items: [
        {
          id: 1001,
          product_id: 1,
          category: "Display",
          spec_key: "Size",
          spec_value: '65"',
        },
        {
          id: 1002,
          product_id: 1,
          category: "Display",
          spec_key: "Resolution",
          spec_value: "3840 × 2160",
        },
        {
          id: 1003,
          product_id: 1,
          category: "Display",
          spec_key: "Brightness",
          spec_value: "400 nits",
        },
      ],
    },

    {
      category: "Touch",
      items: [
        {
          id: 1004,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Type",
          spec_value: "Infrared",
        },
        {
          id: 1005,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Points",
          spec_value: "20 Points",
        },
        {
          id: 1006,
          product_id: 1,
          category: "Touch",
          spec_key: "Response Time",
          spec_value: "8 ms",
        },
      ],
    },

    {
      category: "Audio",
      items: [
        {
          id: 1007,
          product_id: 1,
          category: "Audio",
          spec_key: "Speaker Output",
          spec_value: "2 × 20W",
        },
        {
          id: 1008,
          product_id: 1,
          category: "Audio",
          spec_key: "Microphone",
          spec_value: "8 Array Mic",
        },
      ],
    },
  ],

  created_at: "2026-05-27T10:00:00.000000Z",
  updated_at: "2026-05-27T10:00:00.000000Z",
},
  {
  id: 1,
  name: "Qonevo IFP 65 – Core",
  slug: "qonevo-ifp-65-core",
  subheading: "Standard performance for classrooms and presentations",
  size: "65",
  chipset: "CVTE",
  storage: "128GB",
  resolution: "4K UHD",
  google_integration: true,
  is_active: true,

  thumbnail:
    prodImg1,

  images: [
    {
      id: 101,
      product_id: 1,
      image_url:
        prodImg2,
      is_primary: true,
      created_at: "2026-05-27T10:00:00.000000Z",
    },
    {
      id: 102,
      product_id: 1,
      image_url:
        prodImg2,
      is_primary: false,
      created_at: "2026-05-27T10:00:01.000000Z",
    },
  ],

  specifications: [
    {
      category: "Display",
      items: [
        {
          id: 1001,
          product_id: 1,
          category: "Display",
          spec_key: "Size",
          spec_value: '65"',
        },
        {
          id: 1002,
          product_id: 1,
          category: "Display",
          spec_key: "Resolution",
          spec_value: "3840 × 2160",
        },
        {
          id: 1003,
          product_id: 1,
          category: "Display",
          spec_key: "Brightness",
          spec_value: "400 nits",
        },
      ],
    },

    {
      category: "Touch",
      items: [
        {
          id: 1004,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Type",
          spec_value: "Infrared",
        },
        {
          id: 1005,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Points",
          spec_value: "20 Points",
        },
        {
          id: 1006,
          product_id: 1,
          category: "Touch",
          spec_key: "Response Time",
          spec_value: "8 ms",
        },
      ],
    },

    {
      category: "Audio",
      items: [
        {
          id: 1007,
          product_id: 1,
          category: "Audio",
          spec_key: "Speaker Output",
          spec_value: "2 × 20W",
        },
        {
          id: 1008,
          product_id: 1,
          category: "Audio",
          spec_key: "Microphone",
          spec_value: "8 Array Mic",
        },
      ],
    },
  ],

  created_at: "2026-05-27T10:00:00.000000Z",
  updated_at: "2026-05-27T10:00:00.000000Z",
},
  {
  id: 1,
  name: "Qonevo IFP 65 – Core",
  slug: "qonevo-ifp-65-core",
  subheading: "Standard performance for classrooms and presentations",
  size: "65",
  chipset: "CVTE",
  storage: "128GB",
  resolution: "4K UHD",
  google_integration: true,
  is_active: true,

  thumbnail:
    prodImg1,

  images: [
    {
      id: 101,
      product_id: 1,
      image_url:
        prodImg2,
      is_primary: true,
      created_at: "2026-05-27T10:00:00.000000Z",
    },
    {
      id: 102,
      product_id: 1,
      image_url:
        prodImg1,
      is_primary: false,
      created_at: "2026-05-27T10:00:01.000000Z",
    },
  ],

  specifications: [
    {
      category: "Display",
      items: [
        {
          id: 1001,
          product_id: 1,
          category: "Display",
          spec_key: "Size",
          spec_value: '65"',
        },
        {
          id: 1002,
          product_id: 1,
          category: "Display",
          spec_key: "Resolution",
          spec_value: "3840 × 2160",
        },
        {
          id: 1003,
          product_id: 1,
          category: "Display",
          spec_key: "Brightness",
          spec_value: "400 nits",
        },
      ],
    },

    {
      category: "Touch",
      items: [
        {
          id: 1004,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Type",
          spec_value: "Infrared",
        },
        {
          id: 1005,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Points",
          spec_value: "20 Points",
        },
        {
          id: 1006,
          product_id: 1,
          category: "Touch",
          spec_key: "Response Time",
          spec_value: "8 ms",
        },
      ],
    },

    {
      category: "Audio",
      items: [
        {
          id: 1007,
          product_id: 1,
          category: "Audio",
          spec_key: "Speaker Output",
          spec_value: "2 × 20W",
        },
        {
          id: 1008,
          product_id: 1,
          category: "Audio",
          spec_key: "Microphone",
          spec_value: "8 Array Mic",
        },
      ],
    },
  ],

  created_at: "2026-05-27T10:00:00.000000Z",
  updated_at: "2026-05-27T10:00:00.000000Z",
},
  {
  id: 1,
  name: "Qonevo IFP 65 – Core",
  slug: "qonevo-ifp-65-core",
  subheading: "Standard performance for classrooms and presentations",
  size: "65",
  chipset: "CVTE",
  storage: "128GB",
  resolution: "4K UHD",
  google_integration: true,
  is_active: true,

  thumbnail:
    prodImg1,

  images: [
    {
      id: 101,
      product_id: 1,
      image_url:
        prodImg2,
      is_primary: true,
      created_at: "2026-05-27T10:00:00.000000Z",
    },
    {
      id: 102,
      product_id: 1,
      image_url:
        prodImg1,
      is_primary: false,
      created_at: "2026-05-27T10:00:01.000000Z",
    },
  ],

  specifications: [
    {
      category: "Display",
      items: [
        {
          id: 1001,
          product_id: 1,
          category: "Display",
          spec_key: "Size",
          spec_value: '65"',
        },
        {
          id: 1002,
          product_id: 1,
          category: "Display",
          spec_key: "Resolution",
          spec_value: "3840 × 2160",
        },
        {
          id: 1003,
          product_id: 1,
          category: "Display",
          spec_key: "Brightness",
          spec_value: "400 nits",
        },
      ],
    },

    {
      category: "Touch",
      items: [
        {
          id: 1004,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Type",
          spec_value: "Infrared",
        },
        {
          id: 1005,
          product_id: 1,
          category: "Touch",
          spec_key: "Touch Points",
          spec_value: "20 Points",
        },
        {
          id: 1006,
          product_id: 1,
          category: "Touch",
          spec_key: "Response Time",
          spec_value: "8 ms",
        },
      ],
    },

    {
      category: "Audio",
      items: [
        {
          id: 1007,
          product_id: 1,
          category: "Audio",
          spec_key: "Speaker Output",
          spec_value: "2 × 20W",
        },
        {
          id: 1008,
          product_id: 1,
          category: "Audio",
          spec_key: "Microphone",
          spec_value: "8 Array Mic",
        },
      ],
    },
  ],

  created_at: "2026-05-27T10:00:00.000000Z",
  updated_at: "2026-05-27T10:00:00.000000Z",
},
 
    ];

const ActiveLed = () => {
  const sizeFilters = ["Indoor", "Outdoor"];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSize, setActiveSize] = useState("Indoor");

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
      <section className="built-for-env">
        {/* <div className="text-container">
            <h2>Built for Every Environment</h2>
            <p>Precision-built indoor and outdoor solutions.</p>
        </div>   */}
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
       <ProductCard products={products} variant="grid-4"/>
        <div className="view-all-wrap">
          <button className="btn-view-all">View All</button>
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
          {/* TEXT */}
          <div className="led-text-content-pf">
            <h3>Performance that shows</h3>

            <p>Enhance user interaction with intelligent features</p>
          </div>

          {/* IMAGE */}
          <div className="image-container-pf">
            <img
            loading="lazy"
              src={performanceBanner}
              alt="LED display performance showcase"
            />
          </div>

          {/* FEATURES */}
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

      <section>
        {/* <ScrollCanvas /> */}
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
          <img src={logo1} alt="Google EDLA Certified" className="cert-img" loading="lazy" />
          <img src={logo2} alt="MSME Ministry" className="cert-img"  loading="lazy"/>
          <img src={logo3} alt="Startup India" className="cert-img" loading="lazy" />
          <img src={logo4} alt="Make in India" className="cert-img" loading="lazy"/>
          <img src={logo5} alt="ISO Certified" className="cert-img" loading="lazy"/>
          <img src={logo7} alt="Google EDLA Certified" className="cert-img"  loading="lazy"/>
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
