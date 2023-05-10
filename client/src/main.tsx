import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp.tsx";
import SignIn from "./components/SignIn.tsx";
import Shop from "./components/Shop.tsx";
import Navbar from "./components/Navbar.tsx";
import Suplier from "./components/Supplier.tsx";
import { store } from "./store.tsx";
import Cart from "./components/Cart.tsx";
import { Provider } from "react-redux";
import ProductInfo from "./components/ProductInfo.tsx";
import CompanyDashboard from "./components/CompanyDashboard.tsx";
import UserDashboard from "./components/UserDashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <App />
      </>
    ),
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar /> <Shop />
      </>
    ),
  },
  {
    path: "/supplier",
    element: (
      <>
        <Suplier />
      </>
    ),
  },
  {
    path: "/cart/:id",
    element: (
      <>
        <Cart />
      </>
    ),
  },
  {
    path: "/user_dashboard/:id",
    element: (
      <>
        <UserDashboard />
      </>
    ),
  },
  {
    path: "/company_dashboard/:id",
    element: (
      <>
        <CompanyDashboard />
      </>
    ),
  },
  {
    path: "/product_info/:id",
    element: (
      <>
        <ProductInfo />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
