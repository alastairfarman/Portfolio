import React from "react";
import Project from "./Project";
import Video from "./Video";
import addActiveClass from "./addActiveClass";

function ThreeD() {
  const DinerProject = [
    { imgURL: "/assets/img/DNR/2.png" },
    { imgURL: "/assets/img/DNR/5.png" },
    { imgURL: "/assets/img/DNR/1.png" },
    { imgURL: "/assets/img/DNR/3.png" },
    { imgURL: "/assets/img/DNR/6.png" },
    { imgURL: "/assets/img/DNR/4.png" },
  ];

  const ProductProject = [{ imgURL: "/assets/img/3X/1.png" }];

  const SNProject = [
    { imgURL: "/assets/img/SN/1.png" },
    { imgURL: "/assets/img/SN/2.png" },
    { imgURL: "/assets/img/SN/3.png" },
    { imgURL: "/assets/img/SN/4.png" },
    { imgURL: "/assets/img/SN/5.png" },
  ];

  return (
    <div className="module minimised" id="selector-3d">
      <h1>05</h1>
      <h2>3D</h2>
      <div className="select" onClick={(e) => addActiveClass(e, "3d")}>
        open
      </div>
      <div className="scroll-area">
        <Project
          data={ProductProject}
          collection={false}
          description="Modelled, texured and lit product image with alpha channel and CSS backround"
        />
        <Project
          data={SNProject}
          collection={true}
          description="Modelled, texured and lit product to test 3d rotate JavaScript functionality for mock e-commerce site"
        />
        <Project
          data={DinerProject}
          collection={true}
          description="A Diner. Palm and rocks from Quixel MegaScans; HDRI, stool and aircon unit from BlenderKit"
        />
        <Video
          videoID={2}
          description={
            "Small Pier. Water experiment. Wood assets from Quixel MegaScans"
          }
        />
        <Video
          videoID={3}
          description={"Dusk drive. Porsche asset from Blenderkit"}
        />
      </div>
    </div>
  );
}

export default ThreeD;
