import React from "react";
import Image from "./Image";

export default function Project(props) {
  const images = props.data.map((item) => {
    return <Image imgURL={item.imgURL} />;
  });

  if (props.collection == true) {
    return (
      <div className="project-section">
        {images[0]}
        <p className="project-title">{props.description}</p>
        <details>
          <summary></summary>
          <div className="arrange">{images.splice(1)}</div>
        </details>
        <hr />
      </div>
    );
  } else {
    return (
      <div className="project-section">
        {images[0]}
        <p className="project-title">{props.description}</p>
        <hr />
      </div>
    );
  }
}
