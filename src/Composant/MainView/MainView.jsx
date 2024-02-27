import React from "react";
import AboutView from "./AboutView/AboutView";
import FactsView from "./FactsView/FactsView";
import SkillView from "./SkillView/SkillView";
import ResumeView from "./ResumeView/ResumeView";
import PortfolioView from "./PortfolioView/PortfolioView";
import ServiceView from "./ServiceView/ServiceView";
import TestimonialsView from "./TestimonialsView/TestimonialsView";
import ContactView from "./ContactView/ContactView";

const MainView = () => {
  return (
    <div>
      <main id="main">
        <AboutView />
        <FactsView />
        <SkillView />
        <ResumeView />
        <PortfolioView />
        <ServiceView />
        <TestimonialsView />
        <ContactView />
      </main>
    </div>
  );
};

export default MainView;
