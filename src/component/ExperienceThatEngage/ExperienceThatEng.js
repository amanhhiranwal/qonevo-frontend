import React from "react";
import "./ExperienceThatEng.css";

import LargeImg from "../../Assets/BrilliantVisuals/ExperienceImg1.png";
import SmallImg1 from "../../Assets/BrilliantVisuals/ExperienceImg2.png";
import SmallImg2 from "../../Assets/BrilliantVisuals/ExperienceImg3.png";

const experienceItems = [
  {
    id: "wall-of-attention",
    heading: "Wall of attention",
    desc: "Made for larger stories",
    image: SmallImg1,
  },
  {
    id: "beacon-of-engagement",
    heading: "Beacon of engagement",
    desc: "Always within sight",
    image: SmallImg2,
  },
  {
    id: "stand-out-naturally",
    heading: "Stand Out Naturally",
    desc: "Built for attention",
    image: LargeImg,
  },
];

function ExperienceCard({ item, isLarge = false }) {
  return (
    <article className={`eng-card${isLarge ? " eng-card-large" : ""}`}>
      <img
        className="eng-card-image"
        src={item.image}
        alt={item.heading}
        loading="lazy"
      />

      <div className="eng-content">
        <h3>{item.heading}</h3>
        <p>{item.desc}</p>
        <button type="button" className="eng-btn-hover">
          View Details
        </button>
      </div>
    </article>
  );
}

export default function ExperienceThatEng() {
  const [firstCard, secondCard, largeCard] = experienceItems;

  return (
    <section
      className="exp-eng-sec"
      aria-labelledby="experiences-that-engage-title"
    >
      <div className="eng-heading-container">
        <h2 id="experiences-that-engage-title">Experiences That Engage</h2>
        <p>Limitless Impact</p>
      </div>

      <div className="eng-main-container">
        <div className="eng-row-1">
          <ExperienceCard item={firstCard} />
          <ExperienceCard item={secondCard} />
        </div>

        <div className="eng-row-2">
          <ExperienceCard item={largeCard} isLarge />
        </div>
      </div>
    </section>
  );
}
