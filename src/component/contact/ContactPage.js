import React, { useState } from "react";
import "../NavbarAndFooter/Navbar&Footer.css";
import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const formdata = {
    name: name,
    email: email,
    phone: phone, 
    company: company,
    website: website,
    message: message
  }

  const resetForm = () => {
  setName("");
  setEmail("");
  setPhone("");
  setCompany("");
  setWebsite("");
  setMessage("");
};


  const handlesubit = (e) =>{
    e.preventDefault();
    
  console.log("Sending form data:", formdata); 
    axios.post("https://api.example.com/contact", formdata)
    .then((response) => {
      console.log("Form submitted successfully:", response.data);
      resetForm();
  
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
       resetForm();
      
    });
  }

  return (
    <section class="contact-section container " id="contact-section">
      <div class="contact-wrapper  col-12 mx-auto">
        <div class="text-center contact-text mb-4">
          <div class="section-headings py-2 mt-2">
            <h2 class="section-title">Let’s Connect</h2>
            <p class="section-subtitle">
              Have a question, project, or partnership in mind? We’re here to
              make your next display smarter.
            </p>
          </div>
        </div>
      </div>

      <form class="row g-5" onSubmit={handlesubit}>
        <div class="col-md-6 col-12">
          <input
            type="text"
            class="form-control-custom"
            id="fullName"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="col-md-6 col-12">
          <input
            type="email"
            class="form-control-custom"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="col-12 mt-4">
          <div class="row gx-4 align-items-end">
            <div class="col-10">
              <input
                type="tel"
                class="form-control-custom"
                id="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div class="col-2 d-flex align-items-end">
              <button type="button" class="btn btn-verify-custom w- 100">
                Verify
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 mt-4">
          <input
            type="text"
            class="form-control-custom"
            id="company"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div class="col-md-6 col-12 mt-4">
          <input
            type="url"
            class="form-control-custom"
            id="website"
            placeholder="Website URL"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div class="col-12 mt-4">
          <textarea
            class="form-control-custom"
            id="message"
            rows="1"
            placeholder="How Can We Help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div class="col-12 text-center pt-2 mt-5">
          <button type="submit" class="btn btn-submit">
            Get in touch
          </button>
        </div>

        <div class="col-12 text-center pt-1 mt-4">
          <small class="text-secondary">
            Prefer direct contact? Reach us at{" "}
            <a
              class="text-secondary text-decoration-none "
              href="mailto:info@qonevo.in"
            >
              info@qonevo.in
            </a>
          </small>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
