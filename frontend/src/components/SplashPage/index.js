import { Link } from "react-router-dom";
import "./splashpage.css"
import image from "../../images/splash.jpeg"
function SplashPage() {
  return (
    <>
    <div className="container">
    <div className="title">
      <h1 className="top">Welcome to GetThere</h1>
      <h2 className="top">We are dedicated to getting you from A to B as quickly as possible.</h2>
    </div>
    <div className="page-contents">
      <Link to="/home">
      <i className="fa-solid fa-eye"/>
        {" "}Find a Vehicle{" "}
        <i className="fa-solid fa-eye"/>
        </Link>
    </div>
    <img className="image" src={image}/>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/farhad-koushan-63b920167/" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-linkedin"/></a>{" "}
          {" "}Developed By Farhad Koushan{" "}
          {" "}<a href="https://github.com/FarhadK2022" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-github"/></a>
      </footer>
    </div>
    </>
  );
}
export default SplashPage;
