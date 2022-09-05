import React from "react";
import FrontendModule from "./FrontendModule";

const FrontendProjects = [
  {
    name: "eCommerce",
    desc: "React.js built mock eCom site with functional basket and JavaScript product spinner",
    imgURL: "/assets/img/frontend/ecom.png",
    liveURL: "https://alastairfarman.github.io/ecom-example/",
    projectURL: "github.com/af/pj",
  },

  {
    name: "WhatsApp Burn Text",
    desc: "Recreating WhatsApp UI and experimenting with JS for digital interpretation of a 'burn letter' ",
    imgURL: "/assets/img/frontend/whts.png",
    liveURL: "github.com/af",
    projectURL: "https://alastairfarman.github.io/NoText/",
  },
  {
    name: "Weather",
    desc: "Asynchronous JS and APIs",
    imgURL: "/assets/img/frontend/wthr.png",
    liveURL: "https://alastairfarman.github.io/Weather-App/",
    projectURL: "github.com/af/pj",
  },

  {
    name: "Library",
    desc: "Further Javascript Concepts",
    imgURL: "/assets/img/frontend/lib.png",
    liveURL: "https://alastairfarman.github.io/Library-v2/",
    projectURL: "github.com/af/pj",
  },
  {
    name: "Restaurant",
    desc: "Modular JS and Webpack",
    imgURL: "/assets/img/frontend/rest.png",
    liveURL: "https://alastairfarman.github.io/Restaurant",
    projectURL: "github.com/af/pj",
  },

  {
    name: "Calculator",
    desc: "Introduction to JavaScript",
    imgURL: "/assets/img/frontend/calc.png",
    liveURL: "https://alastairfarman.github.io/Calculator/",
    projectURL: "github.com/af/pj",
  },
  {
    name: "Dashboard",
    desc: "Practicing HTML and CSS",
    imgURL: "/assets/img/frontend/dash.png",
    liveURL: "https://alastairfarman.github.io/Admin-Dashboard/",
    projectURL: "github.com/af/pj",
  },
];

function Frontend() {
  function addActiveClass(e) {
    let modules = document.getElementsByClassName("module");
    let thisModule = document.getElementById("selector-frontend");
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
    thisModule.lastChild.setAttribute("class", "scroll-area frontend");
  }

  return (
    <div className="module" id="selector-frontend">
      <h1>02</h1>
      <h2>Frontend</h2>
      <div className="select" onClick={addActiveClass}>
        open
      </div>
      <div className="scroll-area">
        <FrontendModule data={FrontendProjects} />
      </div>
    </div>
  );
}

export default Frontend;
