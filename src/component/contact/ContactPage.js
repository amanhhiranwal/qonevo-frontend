import React, { useState } from "react";
import "../NavbarAndFooter/Navbar&Footer.css";
import axios from "axios";
import "./toast.css"; // 👈 Create this file

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // 🔐 Extra states (ADDED safely)
  const [errors, setErrors] = useState({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setWebsite("");
    setMessage("");
    setErrors({});
    setEmailTouched(false);
  };

  // ✅ Live email validation
  const validateEmail = (value) => {
    if (!value.includes("@")) {
      return "Email must contain @";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Enter a valid email address";
    }
    return "";
  };

  // ✅ Final validation before submit
  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else {
      const emailError = validateEmail(email);
      if (emailError) newErrors.email = emailError;
    }

    if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be exactly 10 digits";

    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      fullName: name,
      email,
      phoneNumber: phone,
      companyName: company,
      websiteUrl: website,
      helpMessage: message,
    };

    try {
      await axios.post(
        "https://api.qonevo.co.in/api/v1/contact/create-contact",
        payload
      );

      showToast(
        "Message sent successfully! You can now download the brochure.",
        "success"
      );

      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      showToast("Failed to send message!", "error");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Qonevo Brochure.pdf";
    link.download = "Qonevo Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* 🔔 Toast Component */}
      {toast.show && (
        <div className={`toast-box ${toast.type}`}>{toast.message}</div>
      )}

      <section className="contact-section container" id="contact-section">
        <div className="contact-wrapper col-12 mx-auto">
          <div className="text-center contact-text mb-4">
            <div className="section-headings py-2 mt-2">
              <h2 className="section-title">Let’s Connect</h2>
              <p className="section-subtitle">
                Have a question, project, or partnership in mind? We’re here to
                make your next display smarter.
              </p>
            </div>
          </div>
        </div>

        <form className="row g-5" onSubmit={handlesubit}>
          {/* NAME */}
          <div className="col-md-6 col-12">
            <input
              type="text"
              className="form-control-custom"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* EMAIL */}
          <div className="col-md-6 col-12">
            <input
              type="email"
              className="form-control-custom"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailTouched) {
                  setErrors({
                    ...errors,
                    email: validateEmail(e.target.value),
                  });
                }
              }}
              onBlur={() => {
                setEmailTouched(true);
                setErrors({
                  ...errors,
                  email: validateEmail(email),
                });
              }}
            />
            {errors.email && emailTouched && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* PHONE */}
          <div className="col-12 mt-4">
            <input
              type="tel"
              className="form-control-custom"
              placeholder="Phone Number"
              value={phone}
              maxLength="10"
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone}</small>
            )}
          </div>

          {/* COMPANY */}
          <div className="col-md-6 col-12 mt-4">
            <input
              type="text"
              className="form-control-custom"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          {/* WEBSITE */}
          <div className="col-md-6 col-12 mt-4">
            <input
              type="url"
              className="form-control-custom"
              placeholder="Website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {/* MESSAGE */}
          <div className="col-12 mt-4">
            <textarea
              className="form-control-custom"
              rows="2"
              placeholder="How Can We Help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}
          </div>

          {/* BUTTONS */}
          <div className="col-12 text-center pt-2 mt-5 gap-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-submit px-4 py-2">
              Get in touch
            </button>

            <button
              type="button"
              className="btn btn-submit px-4 py-2"
              disabled={!isSubmitted}
              onClick={handleDownload}
              style={{
                opacity: isSubmitted ? 1 : 0.5,
                cursor: isSubmitted ? "pointer" : "not-allowed",
              }}
            >
              Download Brochure
            </button>
          </div>

          <div className="col-12 text-center pt-1 mt-4">
            <small className="text-secondary">
              Prefer direct contact? Reach us at{" "}
              <a
                className="text-secondary text-decoration-none"
                href="mailto:business@qonevo.in"
              >
                business@qonevo.in
              </a>
            </small>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
