import { Link } from "react-router-dom";
import "./carouselcard.css"

function CarouselCardAll(data) {
  console.log(data);
  return (
    <>
      <div>
        <Link to="/comingsoon">
        <div className="card">
          <img src={data.data.image.props.src} alt={" "} />
          <>{data.data.title.props.children}</>
        </div>
        </Link>
      </div>
    </>
  );
}

export default CarouselCardAll;
