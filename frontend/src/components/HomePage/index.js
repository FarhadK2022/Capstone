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
          <h1>Find the Perfect Vehicle</h1>
        </div>
        <button className="button">
          <Link to="/cars">
            All Vehicles
          </Link>
        </button>
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
