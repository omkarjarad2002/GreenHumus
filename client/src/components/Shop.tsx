import { useState, useEffect } from "react";
import CheckBoxComponent from "./CheckBoxComponent";
import ProductsComponent from "./ProductsComponent";
import "./Shop.css";

function Shop() {
  return (
    <>
      <div>
        <div className="filter_container ">
          <div className="filter_selection_container">
            <h2 className="mx-4 my-9 text-xl tracking-wide font-semibold">
              FILTERS
            </h2>
          </div>
          <div className="products_selection_container">
            <h2 className="mx-20 my-9 text-xl tracking-wide font-semibold">
              PRODUCTS
            </h2>
          </div>
        </div>

        <div className="products_selection_container">
          <div className="selection_container">
            <CheckBoxComponent />
          </div>
          <div className="products_container grid grid-cols-4 gap-5">
            <ProductsComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
