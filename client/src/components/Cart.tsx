import "./Cart.css";
import { AiFillMinusSquare } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Cart() {
  const navigate = useNavigate();
  let i = 1;

  const minusClick = (i: number) => {
    console.log(i);
    if (i > 0) {
      return i--;
    }
  };

  const plusClick = (i: number) => {
    console.log(i);
    if (i >= 1) {
      return i++;
    }
  };

  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.get(`http://localhost:3000/getUserProducts/${id}`)
      .then((res) => setProducts(res.data.fertilizerExist))
      .catch((err) => console.log(err));
  };
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  const removeBtn = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className="cartOuterDiv">
        <div className="extraDiv"></div>
        <div className="cartInnerDiv">
          <div className="shoppingCart">
            <div className="cartHeading">
              <div className="HeadingNameDiv">
                <h1 className="font-sans text-xl">Shopping Cart</h1>
              </div>
              <div className="ItemNameDiv">
                <h1 className="font-sans text-xl ">Items</h1>
              </div>
            </div>
            <hr className="cartHr"></hr>
            <div className="cartBodyHeadings">
              <div className="productionDetailsDivHeading">
                <h1>PRODUCTION DETAILS</h1>
              </div>
              <div className="productionQuantityDivHeading">
                <h2>QUANTITY</h2>
              </div>
              <div className="productionPriceDivHeading">
                <h2>PRICE</h2>
              </div>
              <div className="productionPriceTotalDivHeading">
                <h2>TOTAL</h2>
              </div>
            </div>
            <hr className="cartHr"></hr>
            <div className="cartBodyOuterDiv">
              {products.map((product: any) => (
                <div className="cartBody">
                  <div className="productionDetailsDiv">
                    <div className="productionImage">
                      <img src={product.file} />
                    </div>
                    <div className="productionName">
                      <p className="my-4 mx-2">{product.name}</p>
                      <p className="my-4">{product.size}</p>
                    </div>
                  </div>
                  <div className="productionQuantityDiv">
                    <div className="minusIcon" onClick={minusClick(i)}>
                      <AiFillMinusSquare />
                    </div>
                    <div className="productionCount">{i}</div>
                    <div className="plusIcon" onClick={plusClick(i)}>
                      <AiFillPlusSquare />
                    </div>
                  </div>
                  <div className="productionPriceDiv">
                    <p>${product.price}</p>
                  </div>
                  <div className="productionPriceTotalDiv">
                    <p>${product.price * product.quantity}</p>
                  </div>
                  <div className="crossIconDiv" onClick={removeBtn}>
                    <RxCross1 />
                  </div>
                </div>
              ))}
              <hr className="cartHr"></hr>
            </div>

            <div className="cartBottom">
              <Link to="/shop">
                <div className="backArrowIcon">
                  <BiArrowBack />
                </div>
              </Link>
              <Link to="/shop">
                <div className="backArrowNaming">
                  <h2>Continue Shopping</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="orderSummary">
            <div className="summaryHeadingNameDiv">
              <h1 className="font-sans text-xl">Summary</h1>
            </div>
            <hr className="summaryHR"></hr>
            {products.map((product: any) => (
              <div className="bill">
                <div className="cartSummaryDiv">
                  <div className="summaryHeadingDiv">
                    <div className="ItemHeadingNameDiv">
                      <h1 className="font-sans ">PRODUCT NAME</h1>
                    </div>
                    <div className="PriceNameDiv">
                      <h1 className="font-sans  ">PRICE</h1>
                    </div>
                  </div>
                  <div className="summaryHeadingDiv">
                    <div className="ItemHeadingNameDiv">
                      <h1 className="font-sans ">{product.name}</h1>
                    </div>
                    <div className="PriceNameDiv">
                      <h1 className="font-sans  ">${product.price * i}</h1>
                    </div>
                  </div>
                </div>
                <div className="cartSummaryDiv">
                  <div className="summaryHeadingDiv">
                    <div className="ItemHeadingNameDiv">
                      <h1 className="font-sans ">ITEMS</h1>
                    </div>
                    <div className="PriceNameDiv">
                      <h1 className="font-sans  ">TOTAL</h1>
                    </div>
                  </div>
                  <div className="summaryHeadingDiv">
                    <div className="ItemHeadingNameDiv">
                      <h1 className="font-sans ">3</h1>
                    </div>
                    <div className="PriceNameDiv">
                      <h1 className="font-sans  ">$300</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <hr className="summaryHR"></hr>
            <button className="checkoutbtn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
