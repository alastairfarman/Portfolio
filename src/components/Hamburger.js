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
        <li>About</li>
        <li>Frontend</li>
        <li>Retouch</li>
        <li>Photography</li>
        <li>3D</li>
      </ul>
    </div>
  );
}
