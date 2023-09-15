import React from "react";
import profile from "../assets/profile1.jpg";

function About() {
  return (
    <div id="about">
      <div id="headshot">
        <img src={profile} className="images" />
      </div>
      <div class="text">
        I just graduated from the{" "}
        <span className="highlight"> University of Waterloo</span>, where I
        studied <span className="highlight">Systems Design Engineering</span>.
        <br></br>
        <br></br>
        In my free time, I like to game with my friends, read, make playlists,
        and try out new food recipes. Scroll down to learn more about my past
        internships & projects!
      </div>
    </div>
  );
}
export default About;
