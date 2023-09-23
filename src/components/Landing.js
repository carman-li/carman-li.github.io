import React from "react";
import Contact from "./Contact";

function Landing() {
  return (
    <div id="landing">
      <Contact />
      <div>
        <div className="title">
          Hi! I'm <span className="highlight">Carman</span>, a recently
          graduated engineer with an interest in frontend development. 👩‍💻
        </div>
      </div>
      <div class="animatedSubtitle heading">
        // btw, I'm currently looking for a full-time position!{" "}
      </div>
    </div>
  );
}
export default Landing;
