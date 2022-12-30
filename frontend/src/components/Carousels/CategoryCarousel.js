import React, { useState } from "react";
import { Link } from "react-router-dom";

const CatCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 7;
  const data = [
    <Link to="/comingsoon">Convertible</Link>,
    <Link to="/comingsoon">Exotic</Link>,
    <Link to="/comingsoon">Executive</Link>,
    <Link to="/comingsoon">Family Friendly</Link>,
    <Link to="/comingsoon">Fast</Link>,
    <Link to="/comingsoon">Hybrid/ Electric</Link>,
    <Link to="/comingsoon">Offroad</Link>,
  ];

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <p>{data[index]}</p>
      <button onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default CatCarousel;
