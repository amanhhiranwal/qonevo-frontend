import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "animate.css";

import "./ProductSlider.css"; // your CSS
import banner1 from "../../Assets/ProductSliderImage/hero1.svg";
import banner2 from "../../Assets/ProductSliderImage/hero2.svg";
import banner3 from "../../Assets/ProductSliderImage/hero3.svg";
import banner4 from "../../Assets/ProductSliderImage/hero4.svg";
const slideData = [
  {
    title: "Seamless Class Collaboration",
    subtitle: "Wireless casting, flawless touch",
    image_url: banner1,
  },
  {
    title: "Beyond The Screen",
    subtitle:
      "Engineering intelligence that responds, adapts, and anticipates your every need.",
    image_url: banner2,
  },
  {
    title: "Transform Your Space",
    subtitle: "Displays that inspire creativity in any environment.",
    image_url: banner3,
  },
  {
    title: "Reliability You Trust",
    subtitle: "Engineered for flawless performance, day after day.",
    image_url: banner4,
  },
  {
    title: "Seamless Class Collaboration",
    subtitle: "Wireless casting, flawless touch",
    image_url: banner1,
  },
  {
    title: "Beyond The Screen",
    subtitle:
      "Engineering intelligence that responds, adapts, and anticipates your every need.",
    image_url: banner2,
  },
  {
    title: "Transform Your Space",
    subtitle: "Displays that inspire creativity in any environment.",
    image_url: banner3,
  },
  {
    title: "Reliability You Trust",
    subtitle: "Engineered for flawless performance, day after day.",
    image_url: banner4,
  },
  {
    title: "Seamless Class Collaboration",
    subtitle: "Wireless casting, flawless touch",
    image_url: banner1,
  },
  {
    title: "Beyond The Screen",
    subtitle:
      "Engineering intelligence that responds, adapts, and anticipates your every need.",
    image_url: banner2,
  },
  {
    title: "Transform Your Space",
    subtitle: "Displays that inspire creativity in any environment.",
    image_url: banner3,
  },
  {
    title: "Reliability You Trust",
    subtitle: "Engineered for flawless performance, day after day.",
    image_url: banner4,
  },
];

export default function ProductSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    swiper.on("init", () => {
      animateText(swiper.activeIndex);
    });

    swiper.on("slideChangeTransitionStart", () => {
      resetAllText();
    });

    swiper.on("slideChangeTransitionEnd", () => {
      animateText(swiper.activeIndex);
    });
  }, []);

  const resetAllText = () => {
    document.querySelectorAll(".slide-text-content").forEach((el) => {
      el.style.opacity = "0";
      el.classList.remove("animate__fadeInUp");
    });
  };

  const animateText = (index) => {
    const activeSlide = document.querySelectorAll(".swiper-slide")[index];
    if (!activeSlide) return;

    const textContent = activeSlide.querySelector(".slide-text-content");
    if (textContent) {
      textContent.style.opacity = "1";
      textContent.classList.add("animate__animated", "animate__fadeInUp");
    }
  };

  return (
    <div className="product-slider-wrapper mt-3">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Scrollbar]}
        // scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={30}
        navigation={false}
        className="myProductSlider"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image_url}
              alt={slide.title}
              className="slide-image"
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
            />

            <div className="slide-overlay">
              <div className="slide-text-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
