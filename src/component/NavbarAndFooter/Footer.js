import React from "react";
import "./Navbar&Footer.css";

const Footer = () => {
  return (
    <footer class="footer bg-white borde r-top">
      <div class="container py-5">
        <div class="row gy-4">
          <div class="col-12 col-lg-4 company-info">
            <h6 class="fw-bold mb-3 text-uppercase">
              Qonevo Technologies Private Limited
            </h6>
            <p class="mb-2">
              <span class="fw-bold">CIN:</span> 72200UP2021PTC156318
            </p>

            <div class="mb-3">
              <span class="fw-bold d-block">Address:</span>
              <p class="mb-2">
                B66, B Block, Sector 65, Noida, Uttar Pradesh, 201309
              </p>
            </div>

            <div>
              <span class="fw-bold d-block">Toll free Number:</span>
              <p class="mb-3">1800 120 5900</p>
            </div>

            {/* {{-- <div>
                    <span class="fw-bold d-block mb-2">Follow Us:</span>
                    <div class="d-flex gap-3">
                        <a href="/" class="text-dark fs-5"><i class="bi bi-linkedin"></i></a>
                        <a href="/" class="text-dark fs-5"><i class="bi bi-instagram"></i></a>
                        <a href="/" class="text-dark fs-5"><i class="bi bi-youtube"></i></a>
                    </div>
                </div> --}} */}
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h6 class="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul class="list-unstyled">
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  About
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Career
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h6 class="fw-bold mb-3 text-uppercase">Displays</h6>
            <ul class="list-unstyled">
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Interactive Flat Panel
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Advertising Display
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Indoor LED Display
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Outdoor LED Display
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Kiosk
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  All-In-One PC & OPS
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h6 class="fw-bold mb-3 text-uppercase">Other Links</h6>
            <ul class="list-unstyled">
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Services
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block">
                  Government Business
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h6 class="fw-bold mb-3 text-uppercase">Policies</h6>
            <ul class="list-unstyled">
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block mb-2">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="/" class="text-dark text-decoration-none d-block">
                  Policy Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom bg-light border-top py-3">
        <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div class="mb-2 mb-md-0">
            <span class="fw-bold me-2">Socials:</span>
            <a
              href="https://www.linkedin.com/company/qonevo-technologies-private-limited/?originalSubdomain=in"
              class="text-dark fs-6 me-3"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            {/* <a href="/" class="text-dark fs-6 me-3">
              <i class="bi bi-instagram"></i>
            </a> */}
            {/* <a href="/" class="text-dark fs-6">
              <i class="bi bi-youtube"></i>
            </a> */}
          </div>

          <div>
            <span class="fw-bold">Sales:</span>
            <a
              href="mailto:business@qonevo.in"
              class="text-dark text-decoration-none"
            >
              business@qonevo.in
            </a>
            {/* <span class="fw-bold ms-4">Support:</span> */}
            {/* <a href="mailto:support@qonevo.in" class="text-dark text-decoration-none">support@qonevo.in</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
