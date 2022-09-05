import React from "react";
import About from "./About";
import Frontend from "./Frontend";
import Photography from "./Photography";
import ThreeD from "./ThreeD";
import Retouch from "./Retouch";

function App(props) {
  return (
    <main className="default">
      <About />
      <Frontend />
      <Retouch />
      <Photography />
      <ThreeD />
      
    </main>
  );
}

export default App;
