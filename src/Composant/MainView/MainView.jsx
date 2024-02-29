import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AboutView from "./AboutView/AboutView";
import FactsView from "./FactsView/FactsView";
import SkillView from "./SkillView/SkillView";
import ResumeView from "./ResumeView/ResumeView";
import PortfolioView from "./PortfolioView/PortfolioView";
import ServiceView from "./ServiceView/ServiceView";
import TestimonialsView from "./TestimonialsView/TestimonialsView";
import ContactView from "./ContactView/ContactView";

const MainView = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "facts",
        "skill",
        "resume",
        "portfolio",
        "service",
        "testimonials",
        "contact",
      ];
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.offsetTop - window.innerHeight / 2 : 0;
      });

      const scrollPosition = window.scrollY;

      let currentSection = "about";
      sectionOffsets.forEach((offset, index) => {
        if (scrollPosition >= offset) {
          currentSection = sections[index];
        }
      });

      setVisibleSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <main id="main">
        <CSSTransition
          in={visibleSection === "about"}
          timeout={500}
          classNames="fade"
        >
          <AboutView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "facts"}
          timeout={500}
          classNames="fade"
        >
          <FactsView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "skill"}
          timeout={500}
          classNames="fade"
        >
          <SkillView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "resume"}
          timeout={500}
          classNames="fade"
        >
          <ResumeView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "portfolio"}
          timeout={500}
          classNames="fade"
        >
          <PortfolioView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "service"}
          timeout={500}
          classNames="fade"
        >
          <ServiceView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "testimonials"}
          timeout={500}
          classNames="fade"
        >
          <TestimonialsView />
        </CSSTransition>
        <CSSTransition
          in={visibleSection === "contact"}
          timeout={500}
          classNames="fade"
        >
          <ContactView />
        </CSSTransition>
      </main>
    </div>
  );
};

export default MainView;
