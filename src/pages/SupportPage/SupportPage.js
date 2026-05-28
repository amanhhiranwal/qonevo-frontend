import React from "react";
import "./SupportPage.css";
import Banner from "../../Assets/Support/banner.png";
import icon1 from "../../Assets/Support/sms-icon.png";
import icon2 from "../../Assets/Support/icon-1.png";
import icon3 from "../../Assets/Support/icon-1.png";
import icon4 from "../../Assets/Support/icon-1.png";
import product1 from "../../Assets/Support/product-1.png";
import product2 from "../../Assets/Support/product-2.png";
import product3 from "../../Assets/Support/product-3.png";
import product4 from "../../Assets/Support/product-4.png";
import product5 from "../../Assets/Support/product-5.png";
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";

import searchIcon from "../../Assets/Support/search-icon.png"



import "../ActiveLEDPage/ActiceLed.css";
import ContactPage from "../../component/contact/ContactPage";


const features = [
  { image: icon1, desc: "Technical Support" },
  { image: icon2, desc: "Inquiry service" },
  { image: icon3, desc: "Virtual Assistant" },
  { image: icon4, desc: "Download Center" },
];

const products = [
  {
    image: product1,
    desc: "Interactive Flat Panel",
  },
  {
    image: product2,
    desc: "Advertising Display & Signage",
  },
  {
    image: product3,
    desc: "Kiosk & Smart Display",
  },
  {
    image: product4,
    desc: "Active LED Display",
  },
  { image: product5, 
    desc: "All-In-One PC & OPS" },
];

const SupportPage = () => {
  return (
    <div className="support-main-container">
      <div className="support-banner">
        <img src={Banner} alt="" />
      </div>

      <div className="sw-delay">
        <div className="sw-delay-text">
          <h3>Support without delays</h3>
          <p>
            Get instant access to product assistance, downloads, warranty
            services, troubleshooting, and expert support, all in one place.
          </p>
        </div>

        {/* FEATURES */}
        <div className="features-container">
          {features.map((item, index) => (
            <div className="features-item" key={index}>
              <div className="features-icon">
                <img src={item.image} alt={item.desc} />
              </div>

              <div className="features-text">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="search-prod-by-name">
        <div className="search-text">
          <div className="sw-delay-text">
            <h3>Search by product name</h3>
            <p>
              Get instant access to product assistance, downloads, warranty
              services, troubleshooting, and expert support, all in one place.
            </p>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Type here..."
            className="search-input"
          />
            <button className="search-btn">
    <img src={searchIcon} alt="search" />
  </button>
        </div>

      <div className="search-products">
  {products.map((item, index) => (
    <div className="prod-item" key={index}>
      <div className="prod-img">
        <img src={item.image} alt={item.desc} />
      </div>

      <div className="prod-text">
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
</div>
      </div>

                 <section className="certification-sec scale-section">
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
        <div className="contact">
          <ContactPage/>
        </div>
    </div>
  );
};

export default SupportPage;
