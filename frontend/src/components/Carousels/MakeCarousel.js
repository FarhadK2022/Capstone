import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselCardAll from "../CarouselCard";

const MakeCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 38;
  const data = [
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/09/Acura-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Acura</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/09/Alfa-Romeo-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Alfa Romeo</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Aston Martin</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/05/logo-Audi-1024x355.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Audi</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/03/Bentley-logo-768x432.jpg" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Bentley</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">BMW</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/02/Bugatti-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Bugatti</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/04/Cadillac-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Cadillac</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Chevrolet</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Ferrari-logo-768x512.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Ferrari</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Ford</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2019/10/Genesis-Logo-768x483.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Genesis</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/03/Honda-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Honda</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/04/Infiniti-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Infinity</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Jaguar-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Jaguar</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/04/Jeep-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Jeep</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/Koenigsegg-Logo.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Koenigsegg</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Lamborghini</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Land-Rover-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Land Rover</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/02/Lexus-L%D0%BEgo.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Lexus</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/06/Lotus-Logo-1024x576.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Lotus</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/11/Lucid-Motors-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Lucid</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/05/Maserati-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Maserati</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2019/12/Mazda_Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Mazda</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Maybach-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Maybach</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/logo-McLaren-1024x260.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">McLaren</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo-1024x637.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Mercedes-Benz</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/Mitsubishi-logo-768x525.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Mitsubishi</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/nissan-logo-768x513.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Nissan</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/Pagani-Logo.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Pagani</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Porsche</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2022/08/Rivian-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Rivian</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/03/Rolls-Royce-Logo-768x483.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Rolls Royce</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2020/10/Saleen-Logo-1024x640.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Saleen</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/09/Subaru-Logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Subaru</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Tesla-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Tesla</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Toyota</Link>,
    },
    {
      image: (
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Volkswagen-logo-768x432.png" alt=" "></img>
      ),
      title: <Link to="/comingsoon">Volkswagen</Link>,
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

export default MakeCarousel;
