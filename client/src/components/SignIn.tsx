import "../components/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UserSlice";

function SignIn() {
  const userDispatch = useDispatch();
  const [Details, setDetails] = useState({
    email: "",
    password: "",
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
    Axios.post("http://localhost:3000/login", {
      email: Details.email,
      password: Details.password,
    })
      .then((res) => {
        console.log(res.data.userExist);
        userDispatch(addUser(res.data.userExist));
        navigate("/");
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <form className=" signInForm drop-shadow-4xl">
          <h1 className=" font-sans text-2xl mx-2 my-2">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </h1>
          <h1 className="font-sans text-3xl mx-10 my-8">SignIn</h1>

          <div className="my-4 mx-10">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                className="email"
                type="email"
                name="email"
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
                className="password"
                type="password"
                name="password"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="signinDiv my-4 mx-10">
            <button
              id="signin"
              type="submit"
              value="Submit"
              role="button"
              onClick={postData}
            >
              SignIn
            </button>
            <p>
              <a>
                <Link to="/register">Don't have a account? Register</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
