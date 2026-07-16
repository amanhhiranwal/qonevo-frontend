import React, { useState } from "react";
import "./SupportPage.css";
import Banner from "../../Assets/Support/banner.png";
import icon1 from "../../Assets/Support/sms-icon.png";
import icon3 from "../../Assets/Support/icon-1.png";
// import product1 from "../../Assets/Support/product-1.png";
// import product2 from "../../Assets/Support/product-2.png";
// import product3 from "../../Assets/Support/product-3.png";
// import product4 from "../../Assets/Support/product-4.png";
// import product5 from "../../Assets/Support/product-5.png";
import product5 from "../../Assets/Support/product-1.png";
import product4 from "../../Assets/Support/product-2.png";
import product2 from "../../Assets/Support/product-3.png";
import product1 from "../../Assets/Support/product-4.png";
import product3 from "../../Assets/Support/product-5.png";
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";
import raiseQuery from "../../Assets/Support/raise-query-icon.png";
import downloadIcon from "../../Assets/Support/download-icon.png";

import "../ActiveLEDPage/ActiceLed.css";
import ContactPage from "../../component/contact/ContactPage";
import PreviousTicketsModal from "../../component/Support/PreviousTicketsModal";
import FAQSearch from "../../component/FAQSearch/FAQSearch";
import { levenshtein, tokenize } from "../../component/FAQSearch/searchUtils";
import PageLayout from "../../layouts/PageLayout";

const features = [
  { image: icon1, desc: "Get Technical Help" },
  { image: raiseQuery, desc: "Raise an Inquiry" },
  { image: icon3, desc: "Virtual Assistant" },
  { image: downloadIcon, desc: "Downloads & Manuals" },
];

const products = [
  {
    image: product1,
    desc: "Interactive Flat Panel",

    hoverContent1: "Setup and Installation",
    hoverContent2: "Software and Firmware",

    sectionId1: "setup-installation",
    sectionId2: "software-firmware",

    route: "/support/ifp",
  },
  {
    image: product2,
    desc: "Advertising Display & Signage",
    hoverContent1: "CMS & Content Setup",
    hoverContent2: "Display Configuration",
    route: "/support",
  },
  {
    image: product3,
    desc: "Kiosk & Smart Display",
    hoverContent1: "Installation Guide",
    hoverContent2: "Touch & Screen Setup",
    route: "/support",
  },
  {
    image: product4,
    desc: "Active LED Display",
    hoverContent1: "Led Configuration",
    hoverContent2: "Calibration Support",
    route: "/support",
  },
  {
    image: product5,
    desc: "All-In-One PC & OPS",
    hoverContent1: "Drivers and Downloads",
    hoverContent2: "Ops and Compatibility",
    route: "/support",
  },
];

const SupportPage = () => {
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const queryTokens = tokenize(searchTerm);

  const filteredProducts = products.filter((product) => {
    if (!queryTokens.length) return true;

    const productTokens = tokenize(product.desc);

    return queryTokens.some((queryWord) =>
      productTokens.some(
        (productWord) =>
          productWord.includes(queryWord) ||
          levenshtein(queryWord, productWord) <= 2,
      ),
    );
  });

  return (
    <PageLayout className="support-main-container">
      <div className="support-banner">
        <img fetchPriority="high" src={Banner} alt="" />
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
                <img
                  height={item.image.height}
                  width={item.image.width}
                  loading="lazy"
                  src={item.image}
                  alt={item.desc}
                />
              </div>

              <div className="features-text">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="support-link-container">
          <p>
            Need to check the previous case?{" "}
            <span>
              <button
                type="button"
                className="check-case-link"
                onClick={() => setShowTicketModal(true)}
              >
                Check your case
              </button>
            </span>
          </p>
        </div>

        {showTicketModal && (
          <PreviousTicketsModal onClose={() => setShowTicketModal(false)} />
        )}
      </div>

      <div className="search-prod-by-name">
        <div className="search-text">
          <div className="sw-delay-text">
            <h3>Find your product</h3>
            <p>Access manuals, downloads, setup guides, and troubleshooting.</p>
          </div>
        </div>

        {/* <div className="search-bar">
          <input type="text" placeholder="Type here" className="search-input" />
          <button className="search-btn">
            <img src={searchIcon} alt="search" />
          </button>
        </div> */}
        <FAQSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="search-products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div className="prod-item" key={index}>
                <div className="prod-img">
                  <img
                   
                    loading="lazy"
                    src={item.image}
                    alt={item.desc}
                  />
                </div>

                <div className="prod-text">
                  <p>{item.desc}</p>
                </div>

                <div className="hover-content">
                  <a href={`${item.route}?section=${item.sectionId1}`}>
                    {item.hoverContent1}
                  </a>

                  <a href={`${item.route}?section=${item.sectionId2}`}>
                    {item.hoverContent2}
                  </a>

                  <a href={item.route}>View All Support</a>
                </div>
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>

      <section className="certification-sec scale-section">
        <h2 className="section-title">Trusted. Recognized. Certified.</h2>
        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          <img
            src={logo1}
            alt="Google EDLA Certified"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo2}
            alt="MSME Ministry"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo3}
            alt="Startup India"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo4}
            alt="Make in India"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo5}
            alt="ISO Certified"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo7}
            alt="Google EDLA Certified"
            loading="lazy"
            className="cert-img"
          />
          <img
            src={logo6}
            loading="lazy"
            alt="GeM Government e-Marketplace"
            className="cert-img"
          />
        </div>
      </section>
      <div className="contact">
        <ContactPage />
      </div>
    </PageLayout>
  );
};

export default SupportPage;
