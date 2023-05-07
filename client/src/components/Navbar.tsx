import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [ID, setID] = useState();
  const { User } = useSelector((state: any) => state.user);
  console.log(User);
  const getCompany = () => {
    axios
      .get(`http://localhost:3000/getUserCompany/${User._id}`)
      .then((res) => setID(res.data.company._id))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCompany();
  });

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
            <div className="searchBox">
              <div className="searchIcon">
                <HiOutlineSearch />
              </div>
              <div className="searchInput">
                <input type="text" placeholder="Search for Fertilizers"></input>
              </div>
            </div>
            <ul>
              <li>
                <a className="font-sans">
                  <Link to={`/company_dashboard/${ID}`}> Profile</Link>
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
