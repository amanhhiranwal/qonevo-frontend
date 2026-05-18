import "./ProductPage.css";

import { useRef } from "react";

import sliderImg from "../../Assets/product-page/slider-img1.png";

export default function ProductSlider() {
  const sliderRef = useRef(null);

  /* CARD DATA */
  const sliderData = [
    {
      id: 1,
      image: sliderImg,
      title: "Create Shapes:",
      desc: "Convert drawings into accurate shapes for better teaching.",
    },
    {
      id: 2,
      image: sliderImg,
      title: "Rubric Builder:",
      desc: "Create a table rubric using AI for your class assignment.",
    },
    {
      id: 3,
      image: sliderImg,
      title: "Research Assistant:",
      desc: "Find information and sources for a research project.",
    },
    {
      id: 4,
      image: sliderImg,
      title: "Chat With Docs:",
      desc: "Upload documents and ask questions about them.",
    },
  ];

  /* SLIDER BUTTONS */
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return <section className="ai-slider-section"></section>;
}
