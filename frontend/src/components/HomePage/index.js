import { Link } from "react-router-dom";
import "./homepage.css";
import CatCarousel from "../Carousels/CategoryCarousel";
import TypeCarousel from "../Carousels/TypeCarousel";
import MakeCarousel from "../Carousels/MakeCarousel";
function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="title">
          <h1>The Vehicle of Your Dreams Awaits</h1>
        </div>
          <Link to="/cars">
        <button className="button">
            All Vehicles
        </button>
          </Link>
        <div className="makes">
          <h3>Search by Make</h3>
          <MakeCarousel/>
        </div>
        <div className="types">
          <h3>Search by Type</h3>
          <TypeCarousel />
        </div>
        <div className="categories">
          <h3>Search by Category</h3>
          <CatCarousel />
        </div>
        <footer className="footer">
          <a
            href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" color="white"/>
          </a>{" "}
          Developed By Farhad Koushan{" "}
          <a
            href="https://github.com/FarhadK2022"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github" color="white"/>
          </a>
        </footer>
      </div>
    </>
  );
}
export default HomePage;
