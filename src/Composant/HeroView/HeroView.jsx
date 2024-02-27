import React, { useEffect } from "react";
import Typed from "typed.js"; // Import de Typed.js

const HeroView = () => {
  // Fonction pour initialiser Typed.js
  const initializeTyped = () => {
    const typed = document.querySelector(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  };

  // Effet pour initialiser Typed.js une fois que le composant est monté
  useEffect(() => {
    initializeTyped();
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div
          className="container"
          /* data-aos="zoom-in" */ data-aos-delay="100"
        >
          <h1>Brandon Johnson</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
          <div className="social-links">
            <a href="" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroView;
