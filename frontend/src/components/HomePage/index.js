import { Link } from "react-router-dom";
import "./homepage.css"
import CatCarousel from "../Carousels/CategoryCarousel";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="title">
          <h1>Find the Perfect Car</h1>
        </div>
        <div className="makes">
          <h3>Search by Make</h3>
          <Link to="/cars">All Vehicles</Link>
        </div>
        <div className="types">
          <h3>Search by Type</h3>
          <Link to="/comingsoon">Cars</Link>{" "}
          <Link to="/comingsoon">Minivans</Link>{" "}
          <Link to="/comingsoon">SUVs</Link>{" "}
          <Link to="/comingsoon">Trucks</Link>{" "}
          <Link to="/comingsoon">Vans</Link>
        </div>
        <div className="categories">
          <h3>Search by Category</h3>
          <CatCarousel/>
          <Link to="/comingsoon">Convertible</Link>{" "}
          <Link to="/comingsoon">Exotic</Link>{" "}
          <Link to="/comingsoon">Executive</Link>{" "}
          <Link to="/comingsoon">Family Friendly</Link>{" "}
          <Link to="/comingsoon">Fast</Link>{" "}
          <Link to="/comingsoon">Hybrid/ Electric</Link>{" "}
          <Link to="/comingsoon">Offroad</Link>
        </div>
        <footer className="footer">
          <a
            href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>{" "}
          Developed By Farhad Koushan{" "}
          <a
            href="https://github.com/FarhadK2022"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>
        </footer>
      </div>
    </>
  );
}
export default HomePage;
