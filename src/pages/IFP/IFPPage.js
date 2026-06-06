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
// import ScrollVideo from "../../component/VideoScroll/ScrollVideo";
import ScrollCanvas from "../../component/VideoScroll/ScrollCanvas";
import DetailModal from "./DetailModal";
import leftImg from "../../Assets/ifp/Property 1=Image01 (1).png";
import rightImg from "../../Assets/ifp/Property 1=Image02 (1).png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";

// import prodImg1 from "../../Assets/ProductCard/img1.png";
// import prodImg2 from "../../Assets/ProductCard/img2.png";

// const products = [
//   {
//     img: image1,
//     imgHover: image1Hover1,
//     name: "Qonevo IFP 65 – Core – 8/128 (CVTE | 9679)",
//     specs: "Standard performance for everyday teaching and presentations",
//     info: "4K UHD | 400 nits | 200W * 2",
//   },
//   {
//     img: image1,
//     imgHover: image1Hover1,
//     name: "Qonevo IFP 65 – Plus – 8/128 (Lango | V100)",
//     specs: "Faster interaction with enhanced processing power",
//     info: "4K UHD | 400 nits | 200W * 2",
//     // price: "₹1,29,999 | ₹1,10,199",
//   },
//   {
//     img: image1,
//     imgHover: image1Hover1,
//     name: "Qonevo IFP 65 – Pro – 8/128 (KTC | 311D2)",
//     specs: "Standard performance for everyday teaching and presentations",
//     info: "4K UHD | 400 nits | 200W * 2",
//     // price: "₹1,22,999 | ₹1,05,199",
//   },
//   {
//     img: image1,
//     imgHover: image1Hover1,
//     name: "Qonevo IFP 65 – Core – 16/128 (CVTE | 3576)",
//     specs: "Standard performance for everyday teaching and presentations",
//     info: "4K UHD | 400 nits | 200W * 2",
//     // price: "₹1,05,999 | ₹89,199",
//   },
// ];
  const BASE_URL = process.env.REACT_APP_BASE_URL;

const IFPPage = () => {
  const sizeFilters = ["65", "75", "86", "98", "110"];

  const [activeSize, setActiveSize] = useState("65");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const limit = 4;

// let data = [
//   {
//   id: 1,
//   name: "Qonevo IFP 65 – Core",
//   slug: "qonevo-ifp-65-core",
//   subheading: "Standard performance for classrooms and presentations",
//   size: "65",
//   chipset: "CVTE",
//   storage: "128GB",
//   resolution: "4K UHD",
//   google_integration: true,
//   is_active: true,

//   thumbnail:
//     prodImg1,

//   images: [
//     {
//       id: 101,
//       product_id: 1,
//       image_url:
//         prodImg2,
//       is_primary: true,
//       created_at: "2026-05-27T10:00:00.000000Z",
//     },
//     {
//       id: 102,
//       product_id: 1,
//       image_url:
//         prodImg1,
//       is_primary: false,
//       created_at: "2026-05-27T10:00:01.000000Z",
//     },
//   ],

//   specifications: [
//     {
//       category: "Display",
//       items: [
//         {
//           id: 1001,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Size",
//           spec_value: '65"',
//         },
//         {
//           id: 1002,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Resolution",
//           spec_value: "3840 × 2160",
//         },
//         {
//           id: 1003,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Brightness",
//           spec_value: "400 nits",
//         },
//       ],
//     },

//     {
//       category: "Touch",
//       items: [
//         {
//           id: 1004,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Type",
//           spec_value: "Infrared",
//         },
//         {
//           id: 1005,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Points",
//           spec_value: "20 Points",
//         },
//         {
//           id: 1006,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Response Time",
//           spec_value: "8 ms",
//         },
//       ],
//     },

//     {
//       category: "Audio",
//       items: [
//         {
//           id: 1007,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Speaker Output",
//           spec_value: "2 × 20W",
//         },
//         {
//           id: 1008,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Microphone",
//           spec_value: "8 Array Mic",
//         },
//       ],
//     },
//   ],

//   created_at: "2026-05-27T10:00:00.000000Z",
//   updated_at: "2026-05-27T10:00:00.000000Z",
// },
//   {
//   id: 1,
//   name: "Qonevo IFP 65 – Core",
//   slug: "qonevo-ifp-65-core",
//   subheading: "Standard performance for classrooms and presentations",
//   size: "65",
//   chipset: "CVTE",
//   storage: "128GB",
//   resolution: "4K UHD",
//   google_integration: true,
//   is_active: true,

//   thumbnail:
//     prodImg1,

//   images: [
//     {
//       id: 101,
//       product_id: 1,
//       image_url:
//         prodImg2,
//       is_primary: true,
//       created_at: "2026-05-27T10:00:00.000000Z",
//     },
//     {
//       id: 102,
//       product_id: 1,
//       image_url:
//         prodImg2,
//       is_primary: false,
//       created_at: "2026-05-27T10:00:01.000000Z",
//     },
//   ],

//   specifications: [
//     {
//       category: "Display",
//       items: [
//         {
//           id: 1001,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Size",
//           spec_value: '65"',
//         },
//         {
//           id: 1002,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Resolution",
//           spec_value: "3840 × 2160",
//         },
//         {
//           id: 1003,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Brightness",
//           spec_value: "400 nits",
//         },
//       ],
//     },

//     {
//       category: "Touch",
//       items: [
//         {
//           id: 1004,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Type",
//           spec_value: "Infrared",
//         },
//         {
//           id: 1005,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Points",
//           spec_value: "20 Points",
//         },
//         {
//           id: 1006,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Response Time",
//           spec_value: "8 ms",
//         },
//       ],
//     },

//     {
//       category: "Audio",
//       items: [
//         {
//           id: 1007,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Speaker Output",
//           spec_value: "2 × 20W",
//         },
//         {
//           id: 1008,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Microphone",
//           spec_value: "8 Array Mic",
//         },
//       ],
//     },
//   ],

//   created_at: "2026-05-27T10:00:00.000000Z",
//   updated_at: "2026-05-27T10:00:00.000000Z",
// },
//   {
//   id: 1,
//   name: "Qonevo IFP 65 – Core",
//   slug: "qonevo-ifp-65-core",
//   subheading: "Standard performance for classrooms and presentations",
//   size: "65",
//   chipset: "CVTE",
//   storage: "128GB",
//   resolution: "4K UHD",
//   google_integration: true,
//   is_active: true,

//   thumbnail:
//     prodImg1,

//   images: [
//     {
//       id: 101,
//       product_id: 1,
//       image_url:
//         prodImg2,
//       is_primary: true,
//       created_at: "2026-05-27T10:00:00.000000Z",
//     },
//     {
//       id: 102,
//       product_id: 1,
//       image_url:
//         prodImg1,
//       is_primary: false,
//       created_at: "2026-05-27T10:00:01.000000Z",
//     },
//   ],

//   specifications: [
//     {
//       category: "Display",
//       items: [
//         {
//           id: 1001,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Size",
//           spec_value: '65"',
//         },
//         {
//           id: 1002,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Resolution",
//           spec_value: "3840 × 2160",
//         },
//         {
//           id: 1003,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Brightness",
//           spec_value: "400 nits",
//         },
//       ],
//     },

//     {
//       category: "Touch",
//       items: [
//         {
//           id: 1004,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Type",
//           spec_value: "Infrared",
//         },
//         {
//           id: 1005,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Points",
//           spec_value: "20 Points",
//         },
//         {
//           id: 1006,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Response Time",
//           spec_value: "8 ms",
//         },
//       ],
//     },

//     {
//       category: "Audio",
//       items: [
//         {
//           id: 1007,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Speaker Output",
//           spec_value: "2 × 20W",
//         },
//         {
//           id: 1008,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Microphone",
//           spec_value: "8 Array Mic",
//         },
//       ],
//     },
//   ],

//   created_at: "2026-05-27T10:00:00.000000Z",
//   updated_at: "2026-05-27T10:00:00.000000Z",
// },
//   {
//   id: 1,
//   name: "Qonevo IFP 65 – Core",
//   slug: "qonevo-ifp-65-core",
//   subheading: "Standard performance for classrooms and presentations",
//   size: "65",
//   chipset: "CVTE",
//   storage: "128GB",
//   resolution: "4K UHD",
//   google_integration: true,
//   is_active: true,

//   thumbnail:
//     prodImg1,

//   images: [
//     {
//       id: 101,
//       product_id: 1,
//       image_url:
//         prodImg2,
//       is_primary: true,
//       created_at: "2026-05-27T10:00:00.000000Z",
//     },
//     {
//       id: 102,
//       product_id: 1,
//       image_url:
//         prodImg1,
//       is_primary: false,
//       created_at: "2026-05-27T10:00:01.000000Z",
//     },
//   ],

//   specifications: [
//     {
//       category: "Display",
//       items: [
//         {
//           id: 1001,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Size",
//           spec_value: '65"',
//         },
//         {
//           id: 1002,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Resolution",
//           spec_value: "3840 × 2160",
//         },
//         {
//           id: 1003,
//           product_id: 1,
//           category: "Display",
//           spec_key: "Brightness",
//           spec_value: "400 nits",
//         },
//       ],
//     },

//     {
//       category: "Touch",
//       items: [
//         {
//           id: 1004,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Type",
//           spec_value: "Infrared",
//         },
//         {
//           id: 1005,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Touch Points",
//           spec_value: "20 Points",
//         },
//         {
//           id: 1006,
//           product_id: 1,
//           category: "Touch",
//           spec_key: "Response Time",
//           spec_value: "8 ms",
//         },
//       ],
//     },

//     {
//       category: "Audio",
//       items: [
//         {
//           id: 1007,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Speaker Output",
//           spec_value: "2 × 20W",
//         },
//         {
//           id: 1008,
//           product_id: 1,
//           category: "Audio",
//           spec_key: "Microphone",
//           spec_value: "8 Array Mic",
//         },
//       ],
//     },
//   ],

//   created_at: "2026-05-27T10:00:00.000000Z",
//   updated_at: "2026-05-27T10:00:00.000000Z",
// },
 
    

// ];

  useEffect(() => {
    const getProducts = async () => {

      // setProducts(data);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/products?limit=${limit}`,
         
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
              fetchPriority="high"
              
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
            <ProductCard products={products} variant="grid-4" />
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
          <img src={logo1} alt="Google EDLA Certified" className="cert-img" loading="lazy" />
          <img src={logo2} alt="MSME Ministry" className="cert-img"  loading="lazy"/>
          <img src={logo3} alt="Startup India" className="cert-img"  loading="lazy"/>
          <img src={logo4} alt="Make in India" className="cert-img" loading="lazy" />
          <img src={logo5} alt="ISO Certified" className="cert-img"  loading="lazy"/>
          <img src={logo7} alt="Google EDLA Certified" className="cert-img" loading="lazy" />
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
