import React from "react";
import Project from "./Project";
import addActiveClass from "./addActiveClass";

function Retouch() {
  const MJ1Project = [
    { imgURL: "/assets/img/MJ1/1.jpg", key: "1" },
    { imgURL: "/assets/img/MJ1/2.jpg", key: "2" },
    { imgURL: "/assets/img/MJ1/3.jpg", key: "3" },
    { imgURL: "/assets/img/MJ1/4.jpg", key: "4" },
    { imgURL: "/assets/img/MJ1/5.jpg", key: "5" },
    { imgURL: "/assets/img/MJ1/6.jpg", key: "6" },
    { imgURL: "/assets/img/MJ1/7.jpg", key: "7" },
    { imgURL: "/assets/img/MJ1/8.jpg", key: "8" },
  ];

  const MJ6Project = [
    { imgURL: "/assets/img/MJ6/1.jpg", key: "1" },
    { imgURL: "/assets/img/MJ6/2.jpg", key: "2" },
    { imgURL: "/assets/img/MJ6/3.jpg", key: "3" },
    { imgURL: "/assets/img/MJ6/4.jpg", key: "4" },
    { imgURL: "/assets/img/MJ6/5.jpg", key: "5" },
  ];

  const MJ4Project = [
    { imgURL: "/assets/img/MJ4/1.jpg", key: "1" },
    { imgURL: "/assets/img/MJ4/2.jpg", key: "2" },
    { imgURL: "/assets/img/MJ4/3.jpg", key: "3" },
    { imgURL: "/assets/img/MJ4/4.jpg", key: "4" },
    { imgURL: "/assets/img/MJ4/5.jpg", key: "5" },
  ];

  const MJ7Project = [
    { imgURL: "/assets/img/MJ7/1.jpg", key: "1" },
    { imgURL: "/assets/img/MJ7/2.jpg", key: "2" },
    { imgURL: "/assets/img/MJ7/3.jpg", key: "3" },
    { imgURL: "/assets/img/MJ7/4.jpg", key: "4" },
    { imgURL: "/assets/img/MJ7/5.jpg", key: "5" },
  ];

  return (
    <div className="module minimised" id="selector-retouch">
      <h1>03</h1>
      <h2>Retouch</h2>
      <div
        className="select"
        id="retouch-open"
        onClick={(e) => addActiveClass(e, "retouch")}
      >
        open
      </div>
      <div className="scroll-area">
        <Project
          data={MJ1Project}
          collection={true}
          description={"Onfilm Magazine"}
        />
        <Project
          data={MJ6Project}
          collection={true}
          description={"Schön Magazine"}
        />
        <Project data={MJ4Project} collection={true} description={"HungerTV"} />
        <Project
          data={MJ7Project}
          collection={true}
          description={"Test - NY"}
        />
      </div>
    </div>
  );
}

export default Retouch;
