import React, { useEffect } from "react";
import $ from "jquery"; // Import de jQuery

const HeaderView = () => {
  // Fonction pour activer/désactiver la classe 'active' sur les liens de la barre de navigation
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    const navbarlinks = document.querySelectorAll("#navbar .scrollto");
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  // Événement de clic sur le bouton de navigation mobile
  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active"); // Ajout ou suppression de la classe 'mobile-nav-active' sur le corps de la page
    $(this).toggleClass("bi-list bi-x"); // Changement de l'icône du bouton entre 'bi-list' et 'bi-x'
  });

  // Événement de clic sur les liens de navigation
  $(document).on("click", ".scrollto", function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      let body = select("body");
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
        let navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }
      scrollto(this.hash);
    }
  });

  useEffect(() => {
    // Au chargement de la page
    navbarlinksActive();

    // À chaque événement de défilement
    window.addEventListener("scroll", navbarlinksActive);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

  // Événement de chargement de la page avec des liens hash dans l'URL
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderView;

// Définition des fonctions select et scrollto
const select = (selector) => document.querySelector(selector);
const scrollto = (hash) => {
  const target = document.querySelector(hash);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
};
