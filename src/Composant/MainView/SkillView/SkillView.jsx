// Fichier SkillView.jsx
import React, { useEffect } from "react";
import { handleSkillWaypointEnter } from "./LogicSkill";

const SkillView = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Récupérer la position de la section des compétences
      const skillsSection = document.getElementById("skills");
      const skillsSectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Vérifier si la section des compétences est dans la vue
      if (skillsSectionTop <= windowHeight) {
        // Si oui, exécuter la fonction pour remplir les barres de compétences
        handleSkillWaypointEnter();

        // Désactiver l'écouteur après utilisation pour éviter de déclencher à nouveau
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Ajouter un écouteur sur le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  PHP <i className="val">80%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress/CMS <i className="val">90%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">55%</i>
                </span>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillView;
