import React from "react";
import "./Navbar&Footer.css";

const Footer = () => {
  return (
    <footer className="footer borde r-top">
      <div className="footer-section py-5">
        <div className="row gy-4">
          <div className="col-12 col-lg-4 company-info">
            <h6 className="fw-bold mb-1  text-uppercase">
              Synergy global Private Limited 
 
            </h6>
            <p className="mb-3">(Formally Known as Qonevo Technologies Pvt Ltd.)</p>
            <p className="mb-2">
              <span className="fw-bold">CIN:</span> 72200UP2021PTC156318
            </p>

            <div className="mb-3">
              <span className="fw-bold d-block">Address:</span>
              <p className="mb-2">
                B66, B Block, Sector 65, Noida, Uttar Pradesh, 201309
              </p>
            </div>

            <div>
              <span className="fw-bold d-block">Toll free Number:</span>
              <p className="mb-3">1800 120 5900</p>
            </div>

            {/* {{-- <div>
                    <span className="fw-bold d-block mb-2">Follow Us:</span>
                    <div className="d-flex gap-3">
                        <a href="/" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
                        <a href="/" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
                        <a href="/" className="text-dark fs-5"><i className="bi bi-youtube"></i></a>
                    </div>
                </div> --}} */}
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Career
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase">Displays</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Interactive Flat Panel
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Advertising Display
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Indoor LED Display
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Outdoor LED Display
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Kiosk
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  All-In-One PC & OPS
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase">Other Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block">
                  Government Business
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3 text-uppercase">Policies</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block mb-2">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none d-block">
                  Policy Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-light border-top py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div className="mb-2 mb-md-0">
            <span className="fw-bold me-2">Socials:</span>
            <a
              href="https://www.linkedin.com/company/qonevo-technologies-private-limited/?originalSubdomain=in"
              className="text-dark fs-6 me-3"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            {/* <a href="/" className="text-dark fs-6 me-3">
              <i className="bi bi-instagram"></i>
            </a> */}
            {/* <a href="/" className="text-dark fs-6">
              <i className="bi bi-youtube"></i>
            </a> */}
          </div>

          <div>
            <span className="fw-bold">Sales:</span>
            <a
              href="mailto:business@qonevo.in"
              className="text-dark text-decoration-none"
            >
              business@qonevo.in
            </a>
            {/* <span className="fw-bold ms-4">Support:</span> */}
            {/* <a href="mailto:support@qonevo.in" className="text-dark text-decoration-none">support@qonevo.in</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
