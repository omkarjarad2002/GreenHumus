import "../components/SignUp.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function SignUp() {
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
              <input className="fnameInput"></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Last Name</label>
            </div>
            <div>
              <input className="lnameInput"></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Phone</label>
            </div>
            <div>
              <input className="phone"></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input className="email"></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Password</label>
            </div>
            <div>
              <input className="password"></input>
            </div>
          </div>
          <div className="my-4 mx-10">
            <div>
              <label>Confirm Password</label>
            </div>
            <div>
              <input className="cpassword"></input>
            </div>
          </div>
          <div className="signupDiv my-4 mx-10">
            <button>SignUp</button>
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
