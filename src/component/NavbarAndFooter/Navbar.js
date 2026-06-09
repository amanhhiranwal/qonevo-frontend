import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";

// import logo from "../../Assets/logo.svg";
import logo from "../../Assets/Synergy-Qonevo-logo.png"
// import ifp from "../../Assets/ifp.svg";
// import ads from "../../Assets/ads.png";
// import ksd from "../../Assets/ksd.png";
// import pc from "../../Assets/pc.png";

import img1 from "../../Assets/DisplayNav/image1.png";
import img2 from "../../Assets/DisplayNav/image2'.png";
import img3 from "../../Assets/DisplayNav/image3.png";
import img4 from "../../Assets/DisplayNav/image4.png";
import img5 from "../../Assets/DisplayNav/image5.png";
import icon from "../../Assets/DisplayNav/icon.png";

// import addons from "../../Assets/addons.png";
// import ald from "../../Assets/ald.png";
import pdfImg from "../../Assets/pdf.png";
import "../NavBarAnimation/NavBarAnimation.css";
import { Link } from "react-router-dom";

export default function MegaMenuNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const showTimeoutRef = useRef(null);

  // const [visibleMenu, setVisibleMenu] = useState(null); 

  const timeOutRef = useRef(null);

  // const handleMouseEnter = (menu) => {
  //   if (window.innerWidth > 991) {
  //     clearTimeout(timeOutRef.current);
  //     setOpenMenu(menu);
  //     setVisibleMenu(menu);
  //   }
  // };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 991) {
      clearTimeout(timeOutRef.current);
      clearTimeout(showTimeoutRef.current);
      setOpenMenu(menu);
      showTimeoutRef.current = setTimeout(() => {
        // setVisibleMenu(menu);
      }, 20);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      // setVisibleMenu(null); // removes "show" → starts fade out
      timeOutRef.current = setTimeout(() => {
        setOpenMenu(null); // unmount only after fade completes (match your transition duration)
      }, 400);
    }
  };

  const handleMobileToggle = (menu) => {
    if (window.innerWidth <= 991) {
      setOpenMenu((prev) => (prev === menu ? null : menu));
    }
  };

  // const scrollToContact = () => {
  //   const el = document.getElementById("contact-section");

  //   if (!el) return;

  //   const isMobile = window.innerWidth < 768;

  //   let top;

  //   if (isMobile) {
  //     const navbarOffset = 80;

  //     top = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
  //   } else {
  //     top =
  //       el.getBoundingClientRect().top +
  //       window.pageYOffset -
  //       window.innerHeight / 2 +
  //       el.offsetHeight / 2;
  //   }

  //   window.scrollTo({
  //     top,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    const navbar = document.querySelector(".navbar.fixed-top");

    if (navbar) {
      const height = navbar.offsetHeight;
      document.body.style.paddingTop = `${height}px`;
    }
  }, []);

  const technicalItems = [
    {
      img: pdfImg,
      text: "75 inch - Qonevo Neo Series",
      pdf: "/IFP.pdf",
    },
    {
      img: pdfImg,
      text: "Qonevo Brochure",
      pdf: "/QonevoBrochure.pdf",
    },
  ];

  const displayItems = [
    {
      img: img1,
      text: "Interactive Flat Panel",
      link: "/ifp",
    },
    {
      img: img2,
      text: "Advertising Display & Signage",
      // link: "/advertising-display",
      link: "/",
    },
    {
      img: img3,
      text: "Kiosk & Smart Display",
      // link: "/kiosk-display",
      link: "/",
    },
    {
      img: img4,
      text: "Active LED Display",
      // link: "/active-led",
      link: "/",
    },
    {
      img: img5,
      text: "All-In-One PC & OPS",
      // link: "/all-in-one-pc",
      link: "/",
    },
    {
      img: icon,
      text: "Accessories & Add-ons",
      // link: "/accessories",
      link: "/",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo me-2" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Display */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("display")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                  onClick={() => handleMobileToggle("display")}
                >
                  Products
                </button>
              </li>

              {/* Solutions */}
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link nav-btn">
                  Solutions
                </button>
              </li>

              {/* Services */}
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link nav-btn">
                  Services
                </button>
              </li>

              {/* Government Business */}
              {/* <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  Government Business
                </button>
              </li> */}

              {/* About */}
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link nav-btn">
                  About
                </button>
              </li>

              {/* Support */}
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link nav-btn">
                  Support
                </button>
              </li>

              {/* Contact Us */}
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link nav-btn">
                  Contact Us
                </button>
              </li>

              {/* Technical Specification */}
              {/* <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("technical")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                  onClick={() => handleMobileToggle("technical")}
                >
                  Technical Specification
                </button>
              </li> */}
            </ul>

            {/* Right Side */}
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
            {/* Search */}
            {/* <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                  aria-label="Search"
                >
                  <i className="bi bi-search"></i>
                </button>
              </li> */}

            {/* Contact */}
            {/* <li className="nav-item">
                <button
                  className="btn btn-submit"
                  onClick={scrollToContact}
                >
                  Contact Us
                </button>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </nav>

      {/* Technical Specification Mega Menu */}
      <div
        className={`mega-menu-content ${
          openMenu === "technical" ? "show" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("technical")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container megamenu py-5 sm:py-10">
          <h5 className="mb-4">Technical Specification</h5>

          <div className="row g-3">
            {technicalItems.map((item, i) => (
              <div key={i} className="col-md-2 col-6 menu-card-head">
                <a
                  href={item.pdf || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="menu-card text-center p-1">
                    <img
                      src={item.img}
                      className="img-fluid mb-2"
                      alt={item.text}
                    />

                    <p className="mb-0">{item.text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Mega Menu */}

      <div className={`mega-overlay ${openMenu === "display" ? "show" : ""}`}>
        <div
          className={`mega-menu-content ${openMenu === "display" ? "show" : ""}`}
          onMouseEnter={() => handleMouseEnter("display")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container-fluid  megamenu py-5">
            {/* <h5 className="mb-4">Products</h5> */}

            <div className="row g-3">
              {displayItems.map((item, i) => {
                const isLast = i === displayItems.length - 1;

                return (
                  <div key={i} className="w-auto flex-start  col-sm-1">
                    <div className="menu-card-head p-2">
                      <Link
                        to={item.link || "/"}
                        className="menu-card text-center p-1 text-decoration-none"
                      >
                        <img
                          src={item.img}
                          alt={item.text}
                          className={`img-fluid mb-2 menu-image ${
                            isLast ? "small-image" : ""
                          }`}
                        />
                        <p className="mb-2 text-dark mt-auto">{item.text}</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
