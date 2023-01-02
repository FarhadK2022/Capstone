import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselCardAll from "../CarouselCard";

const CatCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 8;
  const data = [
    {
      image: (
        <img
          src="https://robbreport.com/wp-content/uploads/2021/10/amgsl09.jpg?w=1000"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Convertible</Link>,
    },
    {
      image: (
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_fill,h_799,w_1200/q_auto:eco/f_auto/v1/cms/uploads/BvPidYhYQfKM3KofSvmV"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Coupe</Link>,
    },
    {
      image: (
        <img
          src="https://secure.img1-fg.wfcdn.com/im/36694123/resize-h600-w600%5Ecompr-r85/1306/130620811/Kids+Cars+%26+Ride-On+Toys.jpg"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Electric</Link>,
    },
    {
      image: (
        <img
          src="https://media.ed.edmunds-media.com/mercedes-benz/maybach/2022/oem/2022_mercedes-benz_maybach_sedan_s-580-4matic_fq_oem_1_1600.jpg"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Executive</Link>,
    },
    {
      image: (
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Exotic</Link>,
    },
    {
      image: (
        <img
          src="https://secure.img1-fg.wfcdn.com/im/36694123/resize-h600-w600%5Ecompr-r85/1306/130620811/Kids+Cars+%26+Ride-On+Toys.jpg"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Hybrid</Link>,
    },
    {
      image: (
        <img
          src="https://cdn.monsterjam.com/styles/jumbotron_large/s3/2022-09/grave_digger.jpg?itok=-6qbPgQK"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Offroad</Link>,
    },
    {
      image: (
        <img
          src="https://www.cnet.com/a/img/resize/51e62d264c87e27e3d9ab0b81d129120c03efd06/hub/2021/10/13/0652789e-b01c-4c7f-afd5-a61762a4ebab/ogi1-2022-bmw-m5-cs-011.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt=" "
        ></img>
      ),
      title: <Link to="/comingsoon">Sedan</Link>,
    },
  ];

  const handlePrevious = () => {
    let newIndex = index - 1;
    setIndex(newIndex < 0 ? (newIndex = length - 1) : newIndex);
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

export default CatCarousel;
