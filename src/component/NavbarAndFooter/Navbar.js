import React, { useEffect, useState } from "react";
import "./Nav.css";

import logo from "../../Assets/logo.svg";
import ifp from "../../Assets/ifp.svg";
import ads from "../../Assets/ads.png";
import ksd from "../../Assets/ksd.png";
import pc from "../../Assets/pc.png";
import addons from "../../Assets/addons.png";
import ald from "../../Assets/ald.png";
import pdfImg from "../../Assets/pdf.png";

import { Link } from "react-router-dom";

export default function MegaMenuNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 991) {
      setOpenMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setOpenMenu(null);
    }
  };

  const handleMobileToggle = (menu) => {
    if (window.innerWidth <= 991) {
      setOpenMenu((prev) => (prev === menu ? null : menu));
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");

    if (!el) return;

    const isMobile = window.innerWidth < 768;

    let top;

    if (isMobile) {
      const navbarOffset = 80;

      top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset;
    } else {
      top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        window.innerHeight / 2 +
        el.offsetHeight / 2;
    }

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

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
      img: ifp,
      text: "Interactive Flat Panel",
      link: "/ifp",
    },
    {
      img: ads,
      text: "Advertising Display & Signage",
      link: "/advertising-display",
    },
    {
      img: ksd,
      text: "Kiosk & Smart Display",
      link: "/kiosk-display",
    },
    {
      img: ald,
      text: "Active LED Display",
      link: "/active-led",
    },
    {
      img: pc,
      text: "All-In-One PC & OPS",
      link: "/all-in-one-pc",
    },
    {
      img: addons,
      text: "Accessories & Add-ons",
      link: "/accessories",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              className="navbar-logo me-2"
            />
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
                  Display
                </button>
              </li>

              {/* Solutions */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  Solutions
                </button>
              </li>

              {/* Services */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  Services
                </button>
              </li>

              {/* Government Business */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  Government Business
                </button>
              </li>

              {/* About */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  About
                </button>
              </li>

              {/* Support */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                >
                  Support
                </button>
              </li>

              {/* Technical Specification */}
              <li
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
              </li>
            </ul>

            {/* Right Side */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Search */}
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link nav-btn"
                  aria-label="Search"
                >
                  <i className="bi bi-search"></i>
                </button>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <button
                  className="btn btn-submit"
                  onClick={scrollToContact}
                >
                  Contact Us
                </button>
              </li>
            </ul>
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
        <div className="container megamenu py-5">
          <h5 className="mb-4">Technical Specification</h5>

          <div className="row g-3">
            {technicalItems.map((item, i) => (
              <div
                key={i}
                className="col-md-2 col-6 menu-card-head"
              >
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
      <div
        className={`mega-menu-content ${
          openMenu === "display" ? "show" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("display")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container megamenu py-5">
          <h5 className="mb-4">Display</h5>

          <div className="row g-3">
            {displayItems.map((item, i) => (
              <div
                key={i}
                className="col-md-2 col-6 menu-card-head"
              >
                <Link
                  to={item.link || "/"}
                  className="menu-card text-center p-1 d-block text-decoration-none"
                >
                  <img
                    src={item.img}
                    className="img-fluid mb-2"
                    alt={item.text}
                  />

                  <p className="mb-0 text-dark">
                    {item.text}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}