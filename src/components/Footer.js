import React from "react";

import logo from "../assets/frogo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="heading">See you around!</div>
      <div className="text">
        Thank you so much for checking out my website. Please feel free to reach
        out if you have any questions or just want to chat. &#128526;
      </div>
      <div class="footer-contact-row">
        <div class="footer-contact">
          <a href="mailto: licarman6962@gmail.com" target="_blank">
            email
          </a>
        </div>
        <div class="footer-contact">
          <a href="https://github.com/carman-li" target="_blank">
            github
          </a>
        </div>
        <div class="footer-contact">
          <a href="https://www.linkedin.com/in/carman-li/" target="_blank">
            linkedin
          </a>
        </div>
        <div class="footer-contact">
          <a
            href="https://open.spotify.com/user/carman25?si=f1be860437b74ab8"
            target="_blank"
          >
            spotify
          </a>
        </div>
      </div>
      <a onClick={() => scrollToTop()}>
        <img className="logo" src={logo}></img>
      </a>
    </div>
  );
}
export default Footer;
