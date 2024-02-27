import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

//js
//import "./assets/js/main.js";
//import "./assets/vendor/purecounter/purecounter_vanilla.js";
//import "./assets/vendor/aos/aos.js";
//import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
//import "./assets/vendor/glightbox/js/glightbox.min.js";
//import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
//import "./assets/vendor/swiper/swiper-bundle.min.js";
//import "./assets/vendor/typed.js/typed.umd.js";
//import "./assets/vendor/waypoints/noframework.waypoints.js";
//import "./assets/vendor/php-email-form/validate.js";

import "@fortawesome/fontawesome-free/css/all.css";
import HeaderView from "./Composant/HeaderView/HeaderView";
import HeroView from "./Composant/HeroView/HeroView";
import MainView from "./Composant/MainView/MainView";
import FooterView from "./Composant/FooterView/FooterView";

function App() {
  return (
    <div>
      <HeaderView />
      <HeroView />
      <MainView />
      <FooterView />
    </div>
  );
}

export default App;
