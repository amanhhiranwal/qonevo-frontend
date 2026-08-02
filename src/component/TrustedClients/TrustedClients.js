import React from 'react'
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";
import "./TrustedClients.css"

export default function TrustedClients() {
  return (
        <section className="scale-section trusted-section">
        <h2 className="section-title">Trusted. Recognized. Certified.</h2>
        <p className="section-sub">
          Aligned with national standards and innovation-driven initiatives
        </p>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 px-4">
          {[logo1, logo2, logo3, logo4, logo5, logo7, logo6].map((logo, i) => (
            <img height={logo.height} width={logo.width} key={i} src={logo} className="cert-img" alt="cert" loading="lazy" />
          ))}
        </div>
      </section>
  )
}
