import "../components/Suplier.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import Axios from "axios";

function Suplier() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [Details, setDetails] = useState({
    cname: "",
    cemail: "",
    country: "",
    state: "",
    phone: "",
    file: "",
    location: "",
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

  const addCompany = async (e: any) => {
    e.preventDefault();
    const file = await uploadFile();

    await Axios.post("http://localhost:3000/addCompany", {
      cname: Details.cname,
      phone: Details.phone,
      cemail: Details.cemail,
      country: Details.country,
      state: Details.state,
      location: Details.location,
      file: file.data.file.filename,
    })
      .then((res) => {
        console.log(res);
        navigate(`/company_dashboard/${res.data.message._id}`);
        alert("Company added successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <form className=" suplierform drop-shadow-4xl">
          <h1 className=" font-sans text-2xl mx-2 my-2">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </h1>
          <h1 className="font-sans text-3xl mx-10 my-8">
            Become a supplier and join with us !! 😊😊
          </h1>
          <div className="my-4 mx-10">
            <div>
              <label>Company Name</label>
            </div>
            <div>
              <input
                className="fnameInput"
                type="text"
                name="cname"
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
                type="email"
                name="cemail"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="country_state_div">
            <div className="my-4 mx-10">
              <div>
                <label>Country</label>
              </div>
              <div>
                <input
                  className="country"
                  type="text"
                  name="country"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="my-4 mx-10">
              <div>
                <label>State</label>
              </div>
              <div>
                <input
                  className="state"
                  type="text"
                  name="state"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="country_state_div">
            <div className="my-4 mx-10">
              <div>
                <label>Phone No.</label>
              </div>
              <div>
                <input
                  className="phone"
                  type="text"
                  name="phone"
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
              <label>Location</label>
            </div>
            <div>
              <input
                className="location"
                type="text"
                name="location"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="joinbtndiv my-4 mx-10">
            <button onClick={addCompany}>Join</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Suplier;
