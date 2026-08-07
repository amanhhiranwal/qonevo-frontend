import React from "react";
import PageLayout from "../../layouts/PageLayout";
import "./AdvDisplay.css";
import AdvDisplayMode from "../../component/AdvDisplayMode/AdvDisplayMode";
import BrilliantVisuals from "../../component/BriliandVisuals/BrilliantVisuals";
import HeroImage from "../../Assets/BrilliantVisuals/hero1.png";
import ExperienceThatEng from "../../component/ExperienceThatEngage/ExperienceThatEng";
import ContactPage from "../../component/contact/ContactPage";
import TrustedClients from "../../component/TrustedClients/TrustedClients";

export default function AdvDisplay() {
  return (
    <PageLayout className={"adv-main-page"}>

     <div className="bv-hero-section">
  <img src={HeroImage} alt="Advertising Display & Signage" />
  <div className="bv-hero-overlay">
    <h1 className="bv-hero-title">Advertising Display & Signage</h1>
    <p className="bv-hero-subtitle">Premium visuals for every space.</p>
  </div>
</div>

      <ExperienceThatEng />
      <AdvDisplayMode />
      <BrilliantVisuals />
      <TrustedClients />
      <ContactPage />
    </PageLayout>
  );
}
