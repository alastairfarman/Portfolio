import React from "react";

function About() {
  function addActiveClass(e) {
    let modules = document.getElementsByClassName("module");
    let thisModule = document.getElementById("selector-about");
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


  return (
    <div className="module" id="selector-about">
      <h1>01</h1>
      <h2>Alastair Farman</h2>
      <div className="select" onClick={addActiveClass}>
        open
      </div>
      <div className="scroll-area">
        
      <p>I am a retoucher and photographer with 10 years experience working in the e-commerce and fashion industries.
                <br/><br/>
                I have worked in various in-house photography studio roles, as a senior retoucher and photographer primarily leading workflow processes, QC, and ecommerce product image art direction.
                <br/><br/>
                Recently, I decided to self-learn Frontend web development to potentially bring my current experience on a new career journey.
                <br/><br/>
                I also enjoy enjoy experimenting with 3D software in my free time.
                <br/><br/>
                <h3>Software</h3>
                <p>Adobe Creative Suite, Photoshop PremierePro AfterEffects, CaptureOne, Blender</p>
                <h3>Langauges and libraries</h3>
                <p>HTML5, CSS, JavaScript, React.js</p>
                <h3>Employers and Clients</h3>
                <p>Net-A-Porter, Mr Porter, Urban Outfitters, Dr Martens, AllSaints</p>
            </p>
        
      </div>
    </div>
  );
}

export default About;
