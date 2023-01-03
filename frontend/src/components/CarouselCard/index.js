import { Link } from "react-router-dom";
import "./carouselcard.css"

function CarouselCardAll(data) {
  // console.log(data);
  return (
    <>
      <div className="carousel-card-container">
        <Link to="/comingsoon">
        <div className="carousel-card-image">
          <img src={data.data.image.props.src} alt={" "} />
        </div>
        <div className="carousel-card-title">
          <>{data.data.title.props.children}</>
        </div>
        </Link>
      </div>
    </>
  );
}

export default CarouselCardAll;
