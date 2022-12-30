import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

const TypeCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 5;
  const data = [
    <Link to="/comingsoon">Cars</Link>,
    <Link to="/comingsoon">Minivans</Link>,
    <Link to="/comingsoon">SUVs</Link>,
    <Link to="/comingsoon">Trucks</Link>,
    <Link to="/comingsoon">Vans</Link>,
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

export default TypeCarousel;
