import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  const { User } = useSelector((state: any) => state.user);

  return (
    <>
      {!User ? (
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
      ) : (
        <nav className="navbar2 flex flex-row-revers py-5 px-5" id="navbar">
          <h1 className="my-0 font-sans text-3xl">
            G<a>reen</a>H<a>umus</a>
          </h1>
          <div className="headingsNavbar2 flex flex-row ">
            <ul>
              <li>
                <a className="font-sans">
                  <Link to="/supplier">Become a Supplier</Link>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="font-sans">
                  <Link to="/shop">Shop</Link>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a className="font-sans">
                  <Link
                    to={
                      !User.isadmin
                        ? `/user_dashboard/${User._id}`
                        : `/company_dashboard/${User._id}`
                    }
                  >
                    Profile
                  </Link>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="font-sans">
                  <Link to="/cart">Cart</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
