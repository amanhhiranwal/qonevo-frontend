import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../Assets/logo.svg";
import ifp from "../../Assets/ifp.svg";
import ads from "../../Assets/ads.png";
import ksd from "../../Assets/ksd.png";
import pc from "../../Assets/pc.png";
import addons from "../../Assets/addons.png";
import ald from "../../Assets/ald.png";

export default function MegaMenuNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  //   const menuRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 991) setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) setOpenMenu(null);
  };

  const handleMobileToggle = (menu) => {
    if (window.innerWidth <= 991) {
      setOpenMenu((prev) => (prev === menu ? null : menu));
    }
  };

  // Fix body padding to match fixed navbar
  useEffect(() => {
    const navbar = document.querySelector(".navbar.fixed-top");
    const height = navbar.offsetHeight;
    document.body.style.paddingTop = `${height}px`;
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="">
            <img src={logo} alt="Logo" className="navbar-logo me-2" />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Navigation */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* Mega Menu Trigger */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("display")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileToggle("display");
                  }}
                >
                  Display
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Government Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>

            {/* Right */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-submit"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mega Menu */}
      <div
        className={`mega-menu-content ${openMenu === "display" ? "show" : ""}`}
        onMouseEnter={() => handleMouseEnter("display")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container megamenu py-5">
          <h5 className="mb-4">Display</h5>

          <div className="row g-3">
            {[
              { img: ifp, text: "Interactive Flat Panel" },
              {
                img: ads,
                text: "Advertising Display & Signage",
              },
              { img: ksd, text: "Kiosk & Smart Display" },
              { img: ald, text: "Active LED Display" },
              { img: pc, text: "All-In-One PC & OPS" },
              {
                img: addons,
                text: "Accessories & Add-ons",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-2 col-6 menu-card-head">
                <div className="menu-card text-center p-1">
                  <img src={item.img} className="img-fluid mb-2" alt="" />
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
