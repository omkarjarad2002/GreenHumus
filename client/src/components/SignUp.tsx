import "../components/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { addUser } from "../features/UserSlice";

function SignUp() {
  const userDispatch = useDispatch();
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postData = (e: any) => {
    e.preventDefault();

    if (
      !Details.fname ||
      !Details.lname ||
      !Details.phone ||
      !Details.email ||
      !Details.password ||
      !Details.cpassword
    ) {
      alert("All fields are required");
      return;
    }

    Axios.post("http://localhost:3000/register", {
      fname: Details.fname,
      lname: Details.lname,
      phone: Details.phone,
      email: Details.email,
      password: Details.password,
      cpassword: Details.cpassword,
    })
      .then((res) => {
        console.log(res);
        userDispatch(addUser(res.data.userExist));
        navigate("/");
        alert("successfully registered");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <form className=" signUpForm drop-shadow-4xl">
          <h1 className=" font-sans text-2xl mx-2 my-2">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </h1>
          <h1 className="font-sans text-3xl mx-10 my-8">SignUp</h1>
          <div className="my-4 mx-10">
            <div>
              <label>First Name</label>
            </div>
            <div>
              <input
                className="fnameInput"
                name="fname"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Last Name</label>
            </div>
            <div>
              <input
                className="lnameInput"
                name="lname"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Phone</label>
            </div>
            <div>
              <input
                className="phone"
                name="phone"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                className="email"
                name="email"
                type="email"
                autoComplete="off"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                autoComplete="off"
                className="password"
                name="password"
                type="password"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Confirm Password</label>
            </div>
            <div>
              <input
                className="cpassword"
                name="cpassword"
                type="password"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="signupDiv my-4 mx-10">
            <button
              id="signup"
              type="submit"
              value="Submit"
              role="button"
              onClick={postData}
            >
              SignUp
            </button>
            <p>
              <a>
                <Link to="/login"> Already have a account? Login</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
