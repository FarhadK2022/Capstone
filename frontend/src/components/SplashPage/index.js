import { Link } from "react-router-dom";
import "./splashpage.css";

function SplashPage() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="top">Find Your Gear</h1>
          <h2 className="top">
            Explore the Earth's Fastest Car Rental Marketplace.
          </h2>
        </div>
        <div className="page-contents">
          <Link to="/home">
            <i className="fa-solid fa-eye" color="red" />
            Find a Vehicle
            <i className="fa-solid fa-eye" color="red"/>
          </Link>
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
export default SplashPage;
