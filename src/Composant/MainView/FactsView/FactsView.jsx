import React, { useEffect, useState } from "react";

const FactsView = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const factsSection = document.getElementById("facts");
      if (!factsSection) return;

      // Récupérez la position de la section des faits par rapport au haut de la fenêtre
      const factsSectionTop = factsSection.getBoundingClientRect().top;

      // Récupérez la hauteur de la fenêtre
      const windowHeight = window.innerHeight;

      // Si la section des faits est visible à l'écran, commencez à compter
      if (factsSectionTop < windowHeight * 0.75) {
        setStartCounting(true);
        // Désactivez l'écouteur d'événements de défilement une fois que la section est atteinte
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Ajoutez l'écouteur d'événements de défilement lors du montage du composant
    window.addEventListener("scroll", handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (startCounting) {
      // Sélectionnez tous les éléments avec la classe purecounter
      const counters = document.querySelectorAll(".purecounter");

      // Fonction pour animer les compteurs
      const animateCounters = () => {
        counters.forEach((counter) => {
          const start = +counter.getAttribute("data-purecounter-start"); // Valeur de départ
          const end = +counter.getAttribute("data-purecounter-end"); // Valeur finale
          const duration =
            +counter.getAttribute("data-purecounter-duration") * 1000; // Durée en millisecondes

          let startTime;

          // Fonction d'animation
          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const value =
              Math.floor((end - start) * (progress / duration)) + start;

            // Mettez à jour le contenu du compteur avec la valeur calculée
            counter.textContent = value;

            // Continuez l'animation jusqu'à ce que la durée soit écoulée
            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = end; // Assurez-vous que la valeur finale est correcte à la fin de l'animation
            }
          };

          // Démarrez l'animation
          requestAnimationFrame(updateCounter);
        });
      };

      // Appelez la fonction d'animation une fois que le composant est monté
      animateCounters();
    }
  }, [startCounting]);

  return (
    <div>
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            {/* Compteurs */}
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="25"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Awards</p>
              </div>
            </div>
            {/* Ajoutez d'autres compteurs de la même manière */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactsView;
