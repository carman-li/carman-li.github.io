import React from "react";

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <div id="contact">
      <IconContext.Provider value={{ size: "1.5em" }}>
        <a href="mailto: licarman6962@gmail.com" target="_blank">
          <GrMail className="icon" />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <a href="https://github.com/carman-li" target="_blank">
          <FaGithub className="icon" />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <a href="https://www.linkedin.com/in/carman-li/" target="_blank">
          <FaLinkedinIn className="icon" />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <a
          href="https://open.spotify.com/user/carman25?si=0ca2ce862b894600"
          target="_blank"
        >
          <FaSpotify className="icon" />
        </a>
      </IconContext.Provider>
    </div>
  );
}
export default Contact;
