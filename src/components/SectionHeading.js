import React from "react";

function SectionHeading(props) {
  return (
    <div class="sectionHeading bold">
      {props.content}
      {props.image ? (
        <div class="inline-image">
          <img src={props.image} class="images" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default SectionHeading;
