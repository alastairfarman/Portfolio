import React from "react";
import Project from "./Project";

function Retouch() {
  function addActiveClass(e) {
    let modules = document.getElementsByClassName("module");
    let thisModule = document.getElementById("selector-retouch");
    for (let module of modules) {
      module.setAttribute("class", "module minimised");
    }
    thisModule.setAttribute("class", "module active");
    let selectors = document.getElementsByClassName("select");
    for (let selector of selectors) {
      selector.setAttribute("class", "select");
    }
    e.target.setAttribute("class", "select hidden");

    let scrollareas = document.getElementsByClassName("scroll-area");
    for (let scrollarea of scrollareas) {
      scrollarea.setAttribute("class", "scroll-area hidden");
    }
    thisModule.lastChild.setAttribute("class", "scroll-area");
  }

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
    <div className="module" id="selector-retouch">
      <h1>03</h1>
      <h2>Retouch</h2>
      <div className="select" onClick={addActiveClass}>
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
        <Project
          data={MJ4Project}
          collection={true}
          description={"HungerTV"}
        />
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
