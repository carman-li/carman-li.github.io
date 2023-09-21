import React from "react";

import ProjectCard from "./ProjectCard";

import yelpImage from "../assets/projects/yelpRoulette.jpg";
import colourBucketImage from "../assets/projects/colourBucket.png";

function Projects() {
  return (
    <div id="projects">
      <ProjectCard
        title="Colour Bucket"
        link="https://github.com/carman-li/colour-bucket"
        tagline={["// Built with Ionic & Firebase"]}
        content="Application where users can generate color palettes from uploaded images. Users can also search through uploads by hexcode."
        image={colourBucketImage}
      />
      {/* <ProjectCard
        title="Yelp Roulette"
        link="https://github.com/carman-li/yelp-roulette"
        tagline={["// Built with React"]}
        content="Web app that randomly selects a restaurant for you based on location and business category."
        image={yelpImage}
      /> */}
    </div>
  );
}
export default Projects;
