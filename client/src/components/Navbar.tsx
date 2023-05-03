import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar flex flex-row-revers py-5 px-5" id="navbar">
        <h1 className="my-2 font-serif text-4xl">
          G<a>reen</a>H<a>umus</a>
        </h1>
        <div className="headingsNavbar flex flex-row ">
          <ul>
            <li>
              <a className="font-serif">
                <Link to="/">Home</Link>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#about" className="font-serif">
                About
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="font-serif" href="#services">
                Services
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="font-serif">
                <Link to="/login">Sign In</Link>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="font-serif">
                <Link to="/register">Sign Up</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
