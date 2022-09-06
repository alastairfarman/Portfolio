import React from "react";
import FrontendModule from "./FrontendModule";
import addActiveClass from "./addActiveClass";

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
 
  return (
    <div className="module minimised" id="selector-frontend">
      <h1>02</h1>
      <h2>Frontend</h2>
      <div className="select" id="frontend-open" onClick={(e) => addActiveClass(e, "frontend")}>
        open
      </div>
      <div className="scroll-area">
        <FrontendModule data={FrontendProjects} />
      </div>
    </div>
  );
}

export default Frontend;
