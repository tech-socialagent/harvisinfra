import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bitumen from "./components/pages/Bitumen";
import Emulsion from "./components/pages/Emulsion";
import Cement from "./components/pages/Cement";
import Steel from "./components/pages/Steel";
import Petroleum from "./components/pages/Petroleum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>
  },
  {
    path:"bitumen",
    element: <Bitumen/>
  },
  {
    path:"/steel",
    element: <Steel/>
  },
  {
    path:"/cement",
    element: <Cement/>
  },
  {
    path:"/petroleum",
    element: <Petroleum/>
  },
  {
    path:"/emulsion",
    element: <Emulsion/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </>
);
