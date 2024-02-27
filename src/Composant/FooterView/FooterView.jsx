import React, { useEffect } from "react";
import $ from "jquery";

const FooterView = () => {
  useEffect(() => {
    const backtotop = $(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.addClass("active");
        } else {
          backtotop.removeClass("active");
        }
      };
      $(window).on("load", toggleBacktotop);
      $(window).on("scroll", toggleBacktotop);
    }
  }, []);

  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>Brandon Johnson</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links">
            <a href="a" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="a" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="a" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="a" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="a" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a
        href=""
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default FooterView;
