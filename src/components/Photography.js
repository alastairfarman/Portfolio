import React from "react";
import Project from "./Project";
import Video from "./Video";
import addActiveClass from "./addActiveClass";

function Photography() {

  const TractProject = [
    { imgURL: "/assets/img/TR/5.jpg", key: "1" },
    { imgURL: "/assets/img/TR/2.jpg", key: "2" },
    { imgURL: "/assets/img/TR/3.jpg", key: "3" },
    { imgURL: "/assets/img/TR/4.jpg", key: "4" },
    { imgURL: "/assets/img/TR/1.jpg", key: "5" },
  ];

  const CFProject = [
    { imgURL: "/assets/img/CF/1.jpg", key: "1" },
    { imgURL: "/assets/img/CF/2.jpg", key: "2" },
    { imgURL: "/assets/img/CF/3.jpg", key: "3" },
    { imgURL: "/assets/img/CF/4.jpg", key: "4" },
    { imgURL: "/assets/img/CF/5.jpg", key: "5" },
  ];

  const WSProject = [
    { imgURL: "/assets/img/WS/1.jpg", key: "1" },
    { imgURL: "/assets/img/WS/2.jpg", key: "2" },
    { imgURL: "/assets/img/WS/3.jpg", key: "3" },
    { imgURL: "/assets/img/WS/4.jpg", key: "4" },
  ];

  const TNFProject = [{ imgURL: "/assets/img/TNF/1.jpg", key: "1" }];

  const BBProject = [
    { imgURL: "/assets/img/BB/1.jpg", key: "1" },
    { imgURL: "/assets/img/BB/2.jpg", key: "2" },
    { imgURL: "/assets/img/BB/3.jpg", key: "3" },
    { imgURL: "/assets/img/BB/4.jpg", key: "4" },
  ];

  const XTProject = [
    { imgURL: "/assets/img/XT/1.jpg", key: "1" },
    { imgURL: "/assets/img/XT/8.jpg", key: "2" },
    { imgURL: "/assets/img/XT/3.jpg", key: "3" },
    { imgURL: "/assets/img/XT/4.jpg", key: "4" },
    { imgURL: "/assets/img/XT/5.jpg", key: "5" },
    { imgURL: "/assets/img/XT/6.jpg", key: "6" },
    { imgURL: "/assets/img/XT/7.jpg", key: "7" },
    { imgURL: "/assets/img/XT/2.jpg", key: "8" },
  ];

  const ADProject = [
    { imgURL: "/assets/img/AD/1.jpg", key: "1" },
    { imgURL: "/assets/img/AD/2.jpg", key: "2" },
    { imgURL: "/assets/img/AD/3.jpg", key: "3" },
    { imgURL: "/assets/img/AD/4.jpg", key: "4" },
    { imgURL: "/assets/img/AD/5.jpg", key: "5" },
    { imgURL: "/assets/img/AD/6.jpg", key: "6" },
    { imgURL: "/assets/img/AD/7.jpg", key: "7" },
    { imgURL: "/assets/img/AD/8.jpg", key: "8" },
  ];

  return (
    <div className="module minimised" id="selector-photography">
      <h1>04</h1>
      <h2>Photography</h2>
      <div className="select" onClick={(e) => addActiveClass(e, "photography")}>
        open
      </div>
      <div className="scroll-area">
        <Project
          data={TNFProject}
          collection={false}
          description={"Dr Martens x The North Face Purple Label"}
        />
        <Project
          data={WSProject}
          collection={true}
          description={"Dr Martens - White Stitch"}
        />
        <Project
          data={CFProject}
          collection={true}
          description={"Dr Martens - CF Stead"}
        />
        <Project
          data={TractProject}
          collection={true}
          description={"Dr Martens - Tract"}
        />
        <Project
          data={BBProject}
          collection={true}
          description={"Dr Martens x BE@RBRICK by MediCom Toy"}
        />
        <Project
          data={XTProject}
          collection={true}
          description={"Dr Martens Catalog"}
        />
        <Project data={ADProject} collection={true} description={"Other"} />
        
        <Video videoID={1} description={"Dr Martens - Aging Raw Leather Demonstration"} />
      </div>
    </div>
  );
}

export default Photography;
