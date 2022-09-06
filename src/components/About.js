import React from "react";
import addActiveClass from "./addActiveClass";

function About() {
  return (
    <div className="module active" id="selector-about">
      <h1>01</h1>
      <h2>Alastair Farman</h2>
      <div
        className="select hidden"
        id="about-open"
        onClick={(e) => addActiveClass(e, "about")}
      >
        open
      </div>
      <div className="scroll-area">
        <p>
          I have 10 years experience working in the e-commerce and fashion
          industries, starting off as a CMS admin for a small independent
          retailer, quickly moving into photography and retouch.
          <br />
          <br />
          In addition to recently going freelance, I have worked in various
          in-house photography studio roles, as a senior retoucher and
          photographer primarily leading workflow processes, QC, and ecommerce
          product image art direction.
          <br />
          <br />
          Since June 2022 I have thrown myself into becoming a self-taught
          frontend web developer, mainly via The Odin Project curriculum and
          other helpful resources.
          <br />
          <br />
          I have also learned the fundamentals of 3D software, playing with
          Blender both for fun and to test ideas for profesional work as the
          industry progresses.
          <br />
          <br />
          <h3>Software</h3>
          <br />
          <ul>
            <li>Adobe Creative Suite; Photoshop, PremierePro, AfterEffects</li>
            <li>Capture One Pro</li>
            <li>Blender</li>
            <li>Visual Studio Code</li>
          </ul>
          <br />
          <h3>Langauges, libraries, skills</h3>
          <br />
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Webpack</li>
          </ul>
          <br />
          <h3>Employers and Clients</h3>
          <br />
          <span>
            Net-A-Porter, Mr Porter, Urban Outfitters, Dr Martens, AllSaints
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
