import "./ProductsCoponent.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Axios from "axios";

function ProductsComponent() {
  const [Fertilizers, setFertilizers] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3000/getAllFertilizers")
      .then((res) => {
        setFertilizers(res.data.fertilizers);
      })
      .catch((err) => console.log(err));
  };
  console.log(Fertilizers);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {Fertilizers?.map((Fertilizer: any) => (
        <div className="productContainer">
          <div className="productbox ">
            <Link to={`/cart/${Fertilizer._id}`}>
              <div className="imgBox">
                <img src={`http://localhost:3000/${Fertilizer.file}`} />
              </div>
              <div className="infoBox">
                <div className="nameBox">
                  <h2 className="my-4 font-sans text-600">
                    {Fertilizer?.name}
                  </h2>
                </div>
                <div className="priceBox">
                  <p className="priceNameTag">Price : </p>
                  <p className="price_div">${Fertilizer.price} </p>
                </div>
                <div className="addToCartBtn">
                  <button className="">ADD TO CART</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsComponent;
