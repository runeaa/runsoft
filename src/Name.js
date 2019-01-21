import React from "react";
import rune from "./resources/rune.jpg";

function Name() {
  return (
    <>
      <img src={rune} className="App-logo" alt="Rune" />
      <h2 className="name">Rune Aasvestad</h2>
      <h2 className="title">Software developer</h2>
    </>
  );
}

export default Name;
