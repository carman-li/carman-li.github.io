import React from "react";

function ProjectCard(props) {
  const tagline = props.tagline;

  return (
    <div class="project-card">
      <div class="project-images">
        <a href={props.link} target="_blank">
          <img class="images" src={props.image}></img>
        </a>
      </div>
      <div class="project-content">
        <div className="heading highlight">{props.title}</div>
        {tagline.map((line) => {
          return <div className="tagline">{line}</div>;
        })}
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}
export default ProjectCard;
