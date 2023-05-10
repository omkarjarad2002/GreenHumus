import "../components/Suplier.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UserSlice";
import "../components/companyDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function CompanyDashboard() {
  const { User } = useSelector((state: any) => state.user);

  const [companyDetails, setCompanyDetails] = useState([]);

  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState("");
  const [Details, setDetails] = useState({
    name: "",
    price: "",
    size: "",
    quantity: "",
    crops: "",
    availability: "",
    file: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const changeImage = (e: any) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const file = files[0];
    setFile(file);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await Axios.post("http://localhost:3000/uploadFile", formData);
    console.log(res);
    return res;
  };

  const getCompany = async () => {
    await axios
      .get(`http://localhost:3000/getUserCompany/${id}`)
      .then((res) => {
        setCompanyDetails(res.data.company);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (User) {
      getCompany();
    }
  });

  const addProduct = async (e: any) => {
    e.preventDefault();
    const file = await uploadFile();

    await Axios.post("http://localhost:3000/addFertilizer", {
      name: Details.name,
      price: Details.price,
      size: Details.size,
      quantity: Details.quantity,
      crops: Details.crops,
      availability: Details.availability,
      companyID: companyDetails._id,
      file: file.data.file.filename,
    })
      .then((res) => {
        alert("Product added successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    userDispatch(addUser(null));
    navigate("/");
  };

  return (
    <>
      <div className="company_img_div">
        <img src={`http://localhost:3000/${companyDetails.file}`} />
      </div>
      <div className="companyDashboard">
        <div className="container">
          <form className=" suplierform drop-shadow-4xl">
            <h1 className=" font-sans text-2xl mx-2 my-2">
              <Link to="/">
                <BiArrowBack />
              </Link>
            </h1>
            <h1 className="font-sans text-3xl mx-10 my-8">
              Add your new product!! 😊😊
            </h1>

            <div className="my-4 mx-10">
              <div>
                <label>Fertilizer Name</label>
              </div>
              <div>
                <input
                  className="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="my-4 mx-10">
              <div>
                <label>Price</label>
              </div>
              <div>
                <input
                  className="price"
                  type="price"
                  name="price"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="country_state_div">
              <div className="my-4 mx-10">
                <div>
                  <label>Size</label>
                </div>
                <div>
                  <input
                    className="size"
                    type="text"
                    name="size"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="my-4 mx-10">
                <div>
                  <label>Quantity</label>
                </div>
                <div>
                  <input
                    className="quantity"
                    type="text"
                    name="quantity"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div className="country_state_div">
              <div className="my-4 mx-10">
                <div>
                  <label>Recommended Crops</label>
                </div>
                <div>
                  <input
                    className="crops"
                    type="text"
                    name="crops"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="my-4 mx-10">
                <div>
                  <label>File</label>
                </div>
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="file"
                    onChange={changeImage}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-4 mx-10">
              <div>
                <label>Availability</label>
              </div>
              <div>
                <input
                  className="availability"
                  type="text"
                  name="availability"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="joinbtndiv my-4 mx-10">
              <button onClick={addProduct}>ADD PRODUCT</button>
            </div>
          </form>
        </div>
        <div className=" my-4 mx-10">
          <div className="company_details">
            <h1> Company Name : {companyDetails.cname}</h1>
            <h1> Phone : {companyDetails.phone}</h1>
            <h1> Email : {companyDetails.email}</h1>
            <h1> Location : {companyDetails.location}</h1>
            <h1> State : {companyDetails.state}</h1>
            <h1> Country :{companyDetails.country}</h1>
            <h1> Date of Establishment :{companyDetails.date}</h1>
          </div>
          <button className="logoutbtn" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default CompanyDashboard;
