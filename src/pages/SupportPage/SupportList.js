import React, { useState, useRef, useEffect } from "react";
import "./SupportPage.css";
import Banner from "../../Assets/Support/banner.png";
import icon1 from "../../Assets/Support/sms-icon.png";
import icon3 from "../../Assets/Support/icon-1.png";
import logo1 from "../../Assets/testimonial/Google apps_01(2) 1.png";
import logo2 from "../../Assets/testimonial/Mask group 2.png";
import logo3 from "../../Assets/testimonial/Mask group.png";
import logo4 from "../../Assets/testimonial/image 17.png";
import logo5 from "../../Assets/testimonial/image 18.png";
import logo6 from "../../Assets/testimonial/image 43.png";
import logo7 from "../../Assets/testimonial/image 19.png";
import raiseQuery from "../../Assets/Support/raise-query-icon.png";
import callIcon from "../../Assets/Support/call-icon.png";
import downloadIcon from "../../Assets/Support/download-icon.png";
import "../ActiveLEDPage/ActiceLed.css";
import ContactPage from "../../component/contact/ContactPage";
import PreviousTicketsModal from "../../component/Support/PreviousTicketsModal";
import FAQSearch from "../../component/FAQSearch/FAQSearch";
import {levenshtein, tokenize, highlight} from "../../component/FAQSearch/searchUtils"
import { useSearchParams } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";


// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const features_sna = [
  {
    image: icon1,
    title: "Contact Support",
    desc: "Get help directly through email support",
    href: "mailto: support@qonevo.in"
  },
  {
    image: raiseQuery,
    title: "Submit a Request",
    desc: "Share your issue with our team for technical assistance and troubleshooting",
    href: null,
  },
  {
    image: callIcon,
    title: "Call Support",
    desc: "Speak with a support executive for urgent assistance",
    href: "tel:+9118001205900"
  },
];

const features = [
  { image: icon1, desc: "Get Technical Help" },
  { image: raiseQuery, desc: "Raise an Inquiry" },
  { image: icon3, desc: "Virtual Assistant" },
  { image: downloadIcon, desc: "Downloads & Manuals" },
];

const faqSections = [
  {
    id: "setup-installation",
    title: "Setup & Installation",
    items: [
      {
        question: "How do I set up my Interactive Flat Panel?",
        answer: "Step-by-step guide for installation and initial configuration",
      },
      {
        question: "What are the mounting requirements for IFP?",
        answer: "Understand wall mount compatibility, height, and placement",
      },
      {
        question: "How do I connect external devices?",
        answer: "Set up laptops, OPS, cameras, speakers, and USB devices",
      },
      {
        question: "The display is not turning on after setup",
        answer: "Troubleshoot power connection and startup issues",
      },
    ],
  },
  {
    id: "touch-interaction",
    title: "Touch & Interaction",
    items: [
      {
        question: "Touch response is not working properly",
        answer: "Steps to recalibrate touch and restore responsiveness",
      },
      {
        question: "Stylus writing feels delayed",
        answer: "Improve writing precision and latency performance",
      },
      {
        question: "Multi-touch gestures are not responding",
        answer: "Troubleshoot interaction settings and compatibility",
      },
    ],
  },
  {
    id: "software-firmware",
    title: "Software & Firmware",
    items: [
      {
        question: "How do I update firmware?",
        answer: "Step-by-step firmware installation guide",
      },
      {
        question: "Gravity AI tools are not loading",
        answer: "Fix AI feature sync and update issues",
      },
      {
        question: "System performance feels slow",
        answer: "Optimize settings and check storage usage",
      },
    ],
  },
  {
    id: "connectivity-casting",
    title: "Connectivity & Casting",
    items: [
      {
        question: "Unable to cast screen wirelessly",
        answer: "Fix device detection and casting issues",
      },
      {
        question: "Laptop is not connecting to the panel",
        answer: "Check ports, permissions, and cable setup",
      },
      {
        question: "OPS connection not detected",
        answer: "Troubleshoot OPS recognition and compatibility",
      },
    ],
  },
  {
    id: "audio-camera",
    title: "Audio & Camera",
    items: [
      {
        question: "Microphone is not picking up voice clearly",
        answer: "Improve audio pickup and troubleshoot mic settings",
      },
      {
        question: "Camera is not working during meetings",
        answer: "Fix camera detection and video configuration issues",
      },
      {
        question: "Why is the audio output not working?",
        answer: "Troubleshoot speaker settings and sound output problems",
      },
    ],
  },
];

// ─── SEARCH HELPERS ───────────────────────────────────────────────────────────

// const STOP_WORDS = new Set([
//   "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
//   "have", "has", "had", "do", "does", "did", "will", "would", "could",
//   "should", "may", "might", "shall", "can", "need", "dare", "ought",
//   "my", "your", "his", "her", "its", "our", "their", "i", "you", "he",
//   "she", "it", "we", "they", "me", "him", "us", "them", "what", "which",
//   "who", "whom", "this", "that", "these", "those", "not", "no", "nor",
//   "so", "yet", "both", "either", "neither", "just", "how", "why", "when",
//   "where", "after", "before", "and", "or", "but", "in", "on", "at", "by",
//   "for", "with", "about", "against", "between", "into", "through", "during",
//   "above", "below", "to", "from", "up", "down", "of", "off", "over",
//   "under", "then", "once", "than", "too", "very", "also", "get", "got",
//   "make", "go", "going", "come", "coming",
// ]);

// const distanceCache = new Map();

function scoreItem(item, section, queryTokens, rawQuery) {
  const qText = item.question.toLowerCase();
  const aText = item.answer.toLowerCase();
  const tText = section.title.toLowerCase();
  const raw = rawQuery.toLowerCase();

  let score = 0;
  const matchedTerms = new Set();

  if (qText.includes(raw)) {
    score += 20;
    queryTokens.forEach((t) => matchedTerms.add(t));
  }
  if (aText.includes(raw)) {
    score += 10;
    queryTokens.forEach((t) => matchedTerms.add(t));
  }
  if (tText.includes(raw)) {
    score += 8;
    queryTokens.forEach((t) => matchedTerms.add(t));
  }

  for (const token of queryTokens) {
    if (qText.includes(token)) {
      score += 5;
      matchedTerms.add(token);
      continue;
    }
    if (aText.includes(token)) {
      score += 2;
      matchedTerms.add(token);
      continue;
    }
    if (tText.includes(token)) {
      score += 3;
      matchedTerms.add(token);
      continue;
    }
    if (token.length >= 5) {
      const fuzzyQ = qText.split(/\s+/).some((w) => levenshtein(token, w) <= 1);
      const fuzzyT = tText.split(/\s+/).some((w) => levenshtein(token, w) <= 1);
      const fuzzyA = aText.split(/\s+/).some((w) => levenshtein(token, w) <= 1);

      if (fuzzyQ || fuzzyT) {
        score += 2;
        matchedTerms.add(token);
      } else if (fuzzyA) {
        score += 1;
        matchedTerms.add(token);
      }
    }
  }

  return { score, matchedTerms: [...matchedTerms] };
}


// ─── COMPONENT ────────────────────────────────────────────────────────────────

const SupportList = () => {
  const sectionRefs = useRef({});
  const isManualScrolling = useRef(false);
  const stickyHeaderRef = useRef(null);
  const faqWrapperRef = useRef(null);

  const [activeSection, setActiveSection] = useState(faqSections[0].id);
  const [openFaqs, setOpenFaqs] = useState(
  faqSections.flatMap((section) =>
    section.items.map((_, index) => `${section.id}-${index}`)
  )
);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSection, setFilteredSection] = useState(faqSections);
  const [highlights, setHighlights] = useState({});
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [navTop, setNavTop] = useState(0); 

  const [searchParams] = useSearchParams();

  // ── Offset ──────────────────────────────────────────────────────────────────

const getOffset = () => {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar?.offsetHeight || 0;

  const stickyHeight =
    stickyHeaderRef.current?.getBoundingClientRect().height || 0;

  return navbarHeight + stickyHeight;
};
  // Measure sticky header after paint, and on every resize
  useEffect(() => {
    const updateNavTop = () => {
      requestAnimationFrame(() => {
        setNavTop(getOffset());
      });
    };

    updateNavTop(); // run once on mount after browser paints

    window.addEventListener("resize", updateNavTop);
    return () => window.removeEventListener("resize", updateNavTop);
  }, []);

  // ── Navigation ──────────────────────────────────────────────────────────────

  const handleNavClick = (id) => {
    isManualScrolling.current = true;
    setActiveSection(id);

    const el = sectionRefs.current[id];
    if (el) {
      const offset = getOffset();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setTimeout(() => {
      isManualScrolling.current = false;
    }, 900);
  };

  // ── Deep link via ?section= ─────────────────────────────────────────────────

  useEffect(() => {
    const sectionId = searchParams.get("section");
    if (!sectionId) return;

    setActiveSection(sectionId);
    setOpenFaqs(
  faqSections.flatMap((section) =>
    section.items.map((_, index) => `${section.id}-${index}`)
  )
);

    setTimeout(() => {
      faqWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        const el = sectionRefs.current[sectionId];
        if (el) {
          const offset = getOffset();
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - offset,
            behavior: "smooth",
          });
        }
      }, 400);
    }, 200);
  }, [searchParams]);

  // ── Intersection Observer ────────────────────────────────────────────────────

  useEffect(() => {
    const offset = getOffset();
    

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;
           if (searchTerm.trim()) return; 
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0.2,
      },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredSection, searchTerm]);

  // ── FAQ Toggle ───────────────────────────────────────────────────────────────

  const toggleFaq = (id) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // ── Smart Search ─────────────────────────────────────────────────────────────

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

  if (!value.trim()) {
  setFilteredSection(faqSections);
  setActiveSection(faqSections[0].id);

  setOpenFaqs(
    faqSections.flatMap((section) =>
      section.items.map((_, index) => `${section.id}-${index}`)
    )
  );

  setHighlights({});
  return;
}

    if (value.trim().length < 2) {
      setFilteredSection(faqSections);
      setHighlights({});
      return;
    }

    const queryTokens = tokenize(value);

    if (!queryTokens.length) {
      setFilteredSection(faqSections);
      setHighlights({});
      return;
    }

    const newHighlights = {};
    const matchedFaqs = [];
    let topSectionId = null;
    let topSectionScore = -1;

    const filtered = faqSections
      .map((section) => {
        const scoredItems = section.items
          .map((item, index) => {
            const { score, matchedTerms } = scoreItem(item, section, queryTokens, value.trim());

            if (score > 0) {
              const key = `${section.id}-${index}`;
              matchedFaqs.push(key);
              newHighlights[key] = {
                q: highlight(item.question, matchedTerms),
                a: highlight(item.answer, matchedTerms),
              };
            }

            return { ...item, score, originalIndex: index };
          })
          .filter((item) => item.score > 0)
          .sort((a, b) => b.score - a.score);

        if (!scoredItems.length) return null;

        const sectionScore = scoredItems.reduce((sum, item) => sum + item.score, 0);

        if (sectionScore > topSectionScore) {
          topSectionScore = sectionScore;
          topSectionId = section.id;
        }

        return { ...section, items: scoredItems };
      })
      .filter(Boolean);

    setFilteredSection(filtered);
setHighlights(newHighlights);
setOpenFaqs(matchedFaqs);
setActiveSection(topSectionId ?? "");

if (topSectionId) {
  requestAnimationFrame(() => {
    const el = sectionRefs.current[topSectionId];

    if (el) {
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          getOffset() -
          20,
        behavior: "smooth",
      });
    }
  });
}
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <PageLayout className="support-main-container">
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

        <div className="features-container">
          {features.map((item, index) => (
            <div className="features-item" key={index}>
              <div className="features-icon">
                <img src={item.image} alt={item.desc} />
              </div>
              <div className="features-text-sp">
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

        {showTicketModal && <PreviousTicketsModal onClose={() => setShowTicketModal(false)} />}
      </div>

      <div className="faq-section-wrapper" id="support-item-sec" ref={faqWrapperRef}>
        {/* ✅ sticky header — height measured dynamically via stickyHeaderRef */}
        <div className="search-prod-by-name-ls" ref={stickyHeaderRef}>
          <div className="search-text">
            <div className="sw-delay-text">
              <h3>Interactive Flat Panel</h3>
              <p>Access manuals, downloads, setup guides, and troubleshooting.</p>
            </div>
          </div>
          <FAQSearch value={searchTerm} onChange={handleSearchChange} />
        </div>

        <div className="faq-section">
          {/* Left Sidebar — ✅ top set dynamically, no hardcoded px */}
          <div
            className="left-navigation-content"
            style={{ top: `${navTop}px` }}
          >
            {faqSections.map((section) => (
              <button
                key={section.id}
                className={`support-nav-item ${activeSection === section.id ? "active" : ""}`}
                onClick={() => handleNavClick(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Right FAQ Content */}
          <div className="right-navigation-content">
            {filteredSection.length > 0 ? (
              filteredSection.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="faq-card"
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  style={{ scrollMarginTop: `${navTop}px` }} // ✅ dynamic, no hardcoded px
                >
                  <h2>{section.title}</h2>

                  {section.items.map((faq, index) => {
                    const originalIndex = faq.originalIndex ?? index;
                    const key = `${section.id}-${originalIndex}`;
                    const isOpen = openFaqs.includes(key);
                    const hl = highlights[key];

                    return (
                      <div className={`faq-item ${isOpen ? "open" : ""}`} key={key}>
                        <div className="faq-question" onClick={() => toggleFaq(key)}>
                          <h3 dangerouslySetInnerHTML={{ __html: hl ? hl.q : faq.question }} />
                          {isOpen && (
                            <p dangerouslySetInnerHTML={{ __html: hl ? hl.a : faq.answer }} />
                          )}
                        </div>
                        <span onClick={() => toggleFaq(key)}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className="no-data">No data present</p>
            )}
          </div>
        </div>
      </div>

      <div className="still-need-assistance-sec sw-delay">
        <div className="sw-delay-text">
          <h3>Still Need Assistance?</h3>
          <p>
            Couldn't find the answer you were looking for? Our support team is here to help.
          </p>
        </div>
        <div className="features-container">
          {features_sna.map((item, index) => (
            <div className="features-item" key={index}>
              <div className="features-icon">
                {item.href ? (
                  <a href={item.href}>
                    <img src={item.image} alt={item.title} />
                  </a>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
              </div>
              <div className="features-text">
                <p className="sna-title">{item.title}</p>
                <p className="sna-desc">{item.desc}</p>
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
          <img src={logo6} alt="GeM Government e-Marketplace" className="cert-img" />
        </div>
      </section>

      <div className="contact">
        <ContactPage />
      </div>
       
    </PageLayout>
  );
};

export default SupportList;