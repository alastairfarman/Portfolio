import addActiveClass from "./addActiveClass";

export default function Hamburger() {
  function changeOpenState() {
    const hamburgerMenu = document.getElementById("hamburger");

    function outsideClickClose(e) {
      if (e.target.contains(hamburgerMenu)) {
      } else {
        hamburgerMenu.setAttribute("class", "closed");
      }
    }

    if (hamburgerMenu.className === "closed") {
      hamburgerMenu.setAttribute("class", "");
      document.addEventListener("click", outsideClickClose);
    } else {
      hamburgerMenu.setAttribute("class", "closed");
    }
  }

  return (
    <div id="hamburger" className="closed" onClick={changeOpenState}>
      <ul>
        <li onClick={(e) => addActiveClass(e, "about")}>About</li>
        <li onClick={(e) => addActiveClass(e, "frontend")}>Frontend</li>
        <li onClick={(e) => addActiveClass(e, "retouch")}>Retouch</li>
        <li onClick={(e) => addActiveClass(e, "photography")}>Photography</li>
        <li onClick={(e) => addActiveClass(e, "3d")}>3D</li>
      </ul>
    </div>
  );
}
