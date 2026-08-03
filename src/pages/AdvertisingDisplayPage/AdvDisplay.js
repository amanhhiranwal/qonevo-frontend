import React from "react";
import PageLayout from "../../layouts/PageLayout";
import "./AdvDisplay.css";
import AdvDisplayMode from "../../component/AdvDisplayMode/AdvDisplayMode";
import BrilliantVisuals from "../../component/BriliandVisuals/BrilliantVisuals";
import HeroImage from "../../Assets/BrilliantVisuals/Hero.png";
import ExperienceThatEng from "../../component/ExperienceThatEngage/ExperienceThatEng";
import ContactPage from "../../component/contact/ContactPage";
import TrustedClients from "../../component/TrustedClients/TrustedClients";

export default function AdvDisplay() {
  return (
    <PageLayout className={"adv-main-page"}>
      <div className="bv-hero-section">
        <img src={HeroImage} alt="" />
      </div>

      <ExperienceThatEng />
      <AdvDisplayMode />
      <BrilliantVisuals />
      <TrustedClients />
      <ContactPage />
    </PageLayout>
  );
}
