import React from "react";
import './loading.css'
function loadingScreen() {
  return (
    <div className="loading">
      <img className="fa-solid fa-gear fa-10x fa-spin" />
      <img className="fa-solid fa-gear fa-spin fa-10x fa-spin-reverse" />
    </div>
  );
}

export default loadingScreen;
