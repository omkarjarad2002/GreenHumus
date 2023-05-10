import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductInfo() {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [companyData, setCompanyData] = useState();

  const getProductDetails = async () => {
    await axios
      .get(`http://localhost:3000/getFertilizer/${id}`)
      .then((res) => {
        setProductData(res.data.fertilizerExist);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCompanyDetails = async () => {
    await axios
      .get(`http://localhost:3000/getCompanyDetails/${productData.companyID}`)
      .then((res) => setCompanyData(res.data.company))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductDetails();
    getCompanyDetails();
  });
  return (
    <>
      <div className="product_info_container">
        <div className="product_img_div">
          <img src={`http://localhost:3000/${productData.file}`} />
        </div>
        <div className="product_info_div">
          <div className="product_details">
            <h1>Product Name : {productData.name}</h1>
            <h1>Price : {productData.price}</h1>

            <h1>Quantity : {productData.quantity}</h1>
            <h1>Size : {productData.size}</h1>
            <h1>Usable on Crops : {productData.crops}</h1>
            <h1>Available : {productData.availability}</h1>
          </div>
          <div className="company_details">
            <h1>Company Name : {companyData.cname}</h1>
            <h1>Company Phone : {companyData.phone}</h1>
            <h1>Company Email : {companyData.email}</h1>
            <h1>Company Location : {companyData.location}</h1>
            <h1>Company State : {companyData.state}</h1>
            <h1>Company Country : {companyData.country}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
