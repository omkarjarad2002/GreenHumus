import { useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./UserDashboard.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../features/UserSlice";

function UserDashboard() {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const { User } = useSelector((state: any) => state.user);
  const [company, setCompany] = useState();

  const getCompany = async () => {
    await axios
      .get(`http://localhost:3000/getUserCompany/${User._id}`)
      .then((res) => {
        setCompany(res.data.company);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (User) {
      getCompany();
    }
  });
  const handleClick = (e: any) => {
    e.preventDefault();
    userDispatch(addUser(null));
    navigate("/");
  };

  return (
    <>
      <div className="user_dashboard_outer">
        <div className="heading_img_div">
          {" "}
          <h1 className=" font-sans text-2xl mx-2 my-2">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </h1>
          <div className="profile_div">
            <img
              className="profile_img"
              src="https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg?w=2000"
            />
          </div>
          <div className="heading_div">
            <h1 className="text-6xl font-serif my-20">
              Expand your Network in Agriculture Sector
            </h1>
          </div>
        </div>
        <div className="user_info">
          <h1 className="text-2xl font-bold">
            Name : {User?.fname} {User?.lname}
          </h1>
          <h1 className="text-xl font-600">Phone : {User.phone}</h1>
          <h1 className="text-xl font-600">Emmail : {User.email}</h1>
          {company == null ? (
            <h1></h1>
          ) : (
            <h1 className="text-xl font-600">{company}</h1>
          )}
          <button className="logoutbtn_user" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
