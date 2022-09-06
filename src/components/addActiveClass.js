export default function addActiveClass(e, selector) {
  let modules = document.getElementsByClassName("module");
  let thisModule = document.getElementById(`selector-${selector}`);
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
  thisModule.lastChild.setAttribute("class", `scroll-area ${selector}`);
}
