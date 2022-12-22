import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>GetThere</h1>
      <h2>as fast as possible</h2>
      <Link to="/cars">All Cars</Link>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/farhad-koushan-63b920167/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/FarhadK2022">
          <i className="fa-brands fa-github"></i>
        </a>
        Developed By Farhad Koushan
      </footer>
    </>
  );
}
export default HomePage;
