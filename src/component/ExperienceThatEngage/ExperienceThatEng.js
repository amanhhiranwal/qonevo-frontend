import React from "react";
import "./ExperienceThatEng.css";

import LargeImg from "../../Assets/BrilliantVisuals/ExperienceImg1.png";
import SmallImg1 from "../../Assets/BrilliantVisuals/ExperienceImg2.png";
import SmallImg2 from "../../Assets/BrilliantVisuals/ExperienceImg3.png";

const data = [
  {
    heading: "Wall of attention",
    desc: "Made for larger stories",
    image: SmallImg1,
  },
  {
    heading: "Beacon of engagement",
    desc: "Always within sight",
    image: SmallImg2,
  },
  {
    heading: "Stand Out Naturally",
    desc: "Built for attention",
    image: LargeImg,
  },
];

export default function ExperienceThatEng() {
  return (
    <section className="exp-eng-sec">
      <div className="eng-heading-container">
        <h2>Experiences That Engage</h2>
        <p>Limitless Impact</p>
      </div>

      <div className="eng-main-container">
        {/* First Row */}
        <div className="eng-row-1">
          {data.slice(0, 2).map((item, index) => (
            <div className="eng-card" key={index}>
              <img src={item.image} alt={item.heading} />

              <div className="eng-content">
                <h3>{item.heading}</h3>
                <p>{item.desc}</p>
                 <button className="eng-btn-hover">View Details</button>
              </div>
              
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="eng-row-2">
          <div className="eng-card large">
            <img src={data[2].image} alt={data[2].heading} />

            <div className="eng-content">
              <h3>{data[2].heading}</h3>
              <p>{data[2].desc}</p>
                               <button className="eng-btn-hover">Click me</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
