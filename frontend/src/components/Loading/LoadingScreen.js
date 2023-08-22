import React from "react";
import './loading.css'
function loadingScreen() {
  return (
    <div className="loading">
      <img className="fa-solid fa-gear fa-rotate-90 fa-10x fa-spin" data-fa-transform="rotate-90" alt="spinning gears"/>
      <img className="fa-solid fa-gear fa-spin fa-10x fa-spin-reverse" alt="spinning gears" />
    </div>
  );
}

export default loadingScreen;
