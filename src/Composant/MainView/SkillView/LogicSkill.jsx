// Fichier avec la fonction handleSkillWaypointEnter.js
import $ from "jquery";

export const handleSkillWaypointEnter = () => {
  $(".progress .progress-bar").each(function () {
    $(this).css("width", $(this).attr("aria-valuenow") + "%");
  });
};
