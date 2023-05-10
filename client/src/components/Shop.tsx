import { useState, useEffect } from "react";
import CheckBoxComponent from "./CheckBoxComponent";
import "./Shop.css";
import "./ProductsCoponent.css";
import { Link } from "react-router-dom";
import "./Shop.css";
import { HiOutlineSearch } from "react-icons/hi";
import Axios from "axios";

function Shop() {
  const [query, setQuery] = useState([""]);
  const [Fertilizers, setFertilizers] = useState([]);
  const [temperoryProducts, setTemperoryProducts] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3000/getAllFertilizers")
      .then((res) => {
        setFertilizers(res.data.fertilizers);
        setTemperoryProducts(res.data.fertilizers);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!query) {
      setFertilizers(temperoryProducts);
      return;
    }

    const filteredProducts = Fertilizers.filter((item) => {
      let Fertilizer = null;

      if (
        item.name.toLowerCase().includes(query) ||
        item.crops.toLowerCase().includes(query)
      )
        return (Fertilizer = item);

      return Fertilizer;
    });
    setFertilizers(filteredProducts);
  }, [query]);

  console.log(Fertilizers);
  useEffect(() => {
    getProducts();
  }, []);

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
            <h2 className="mx-40 my-9 text-xl tracking-wide font-semibold">
              PRODUCTS
            </h2>
          </div>
        </div>

        <div className="products_selection_container">
          <div className="selection_container">
            <div className="searchBox">
              <div className="searchIcon">
                <HiOutlineSearch />
              </div>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for Fertilizers"
                  name="search"
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>
            </div>
            <fieldset>
              <legend className="sr-only">Notifications</legend>
              <div className="space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="rice"
                      aria-describedby="crops-description"
                      name="rice"
                      onClick={() => setQuery("rice")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="rice" className="font-medium text-gray-900">
                      Rice
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="maiz"
                      aria-describedby="crops-description"
                      name="maiz"
                      onClick={() => setQuery("maiz")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="maiz" className="font-medium text-gray-900">
                      Maiz
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="wheat"
                      aria-describedby="crops-description"
                      name="wheat"
                      onClick={() => setQuery("wheat")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="wheat"
                      className="font-medium text-gray-900"
                    >
                      Wheat
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="barley"
                      aria-describedby="crops-description"
                      name="barley"
                      onClick={() => setQuery("barley")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="barley"
                      className="font-medium text-gray-900"
                    >
                      Barley
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="potato"
                      aria-describedby="crops-description"
                      name="potato"
                      onClick={() => setQuery("potato")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="potato"
                      className="font-medium text-gray-900"
                    >
                      Potato
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="sweetpotato"
                      aria-describedby="crops-description"
                      name="sweetpotato"
                      onClick={() => setQuery("sweetpotato")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="sweetpotato"
                      className="font-medium text-gray-900"
                    >
                      Sweet Potato
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="tomato"
                      aria-describedby="crops-description"
                      name="tomato"
                      onClick={() => setQuery("tomato")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="tomato"
                      className="font-medium text-gray-900"
                    >
                      Tomato
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="groundnut"
                      aria-describedby="crops-description"
                      name="groundnut"
                      onClick={() => setQuery("groundnut")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="groundnut"
                      className="font-medium text-gray-900"
                    >
                      Groundnut
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="jawar"
                      aria-describedby="crops-description"
                      name="jawar"
                      onClick={() => setQuery("jawar")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="jawar"
                      className="font-medium text-gray-900"
                    >
                      Jawar
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="bajra"
                      aria-describedby="crops-description"
                      name="bajra"
                      type="checkbox"
                      onClick={() => setQuery("bajra")}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="bajra"
                      className="font-medium text-gray-900"
                    >
                      Bajra
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="products_container grid grid-cols-3 gap-5">
            {Fertilizers?.map((Fertilizer: any) => (
              <div className="productContainer">
                <div className="productbox ">
                  <Link to={`/product_info/${Fertilizer._id}`}>
                    <div className="imgBox">
                      <img src={`http://localhost:3000/${Fertilizer.file}`} />
                    </div>
                  </Link>
                  <div className="infoBox">
                    <Link to={`/product_info/${Fertilizer._id}`}>
                      <div className="nameBox">
                        <h2 className="my-4 font-sans text-600">
                          {Fertilizer?.name}
                        </h2>
                      </div>
                    </Link>
                    <Link to={`/product_info/${Fertilizer._id}`}>
                      <div className="priceBox">
                        <p className="priceNameTag">Price : </p>
                        <p className="price_div">${Fertilizer.price} </p>
                      </div>
                    </Link>
                    <div className="addToCartBtn">
                      <Link to={`/cart/${Fertilizer._id}`}>
                        <button className="">ADD TO CART</button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
