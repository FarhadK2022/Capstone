import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";
import CarouselCardAll from "../CarouselCard";

const TypeCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 5;
  const data = [
    {
      image: (
        <img src="https://images.squarespace-cdn.com/content/v1/5f7ca9b4bb17060b028086bb/1671060339284-453CKUKL7QD3WYTBYUBW/DSC01382+%282%29.jpg?format=2500w" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Cars</Link>,
    },
    {
      image: (
        <img src="https://www.autotrader.com/wp-content/uploads/2020/05/2021-toyota-sienna-front-right-side.jpg?w=1024" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Minivans</Link>,
    },
    {
      image: (
        <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicle-groups/suv/01-images/2023-suvs-tahoe.jpg?imwidth=960" alt=" "></img>
      ),
      title: <Link to="/comingsoon">SUVs</Link>,
    },
    {
      image: (
        <img src="https://www.driveway.com/_next/static/media/truck.f5b5065b.jpg" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Trucks</Link>,
    },
    {
      image: (
        <img src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/transitvanwagon/2023/collections/dm/22_transit_passengervan_a05.tif?croppathe=1_3x2&wid=900" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Vans</Link>,
    },
  ];

  const handlePrevious = () => {
    let newIndex = index - 1;
    setIndex(newIndex < 0 ? (newIndex = length - 1 ) : newIndex);
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
      <CarouselCardAll data={data[index]} />
      <button onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default TypeCarousel;
