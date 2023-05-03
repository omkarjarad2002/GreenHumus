import "../components/SignIn.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function SignIn() {
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

          <div className="signinDiv my-4 mx-10">
            <button>SignIn</button>
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
