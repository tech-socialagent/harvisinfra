import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bitumen from "./components/pages/Bitumen";
import RoadInfra from "./components/pages/RoadInfra";
import Emulsion from "./components/pages/Emulsion";
import Cement from "./components/pages/Cement";
import Steel from "./components/pages/Steel";
import Petroleum from "./components/pages/Petroleum";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import AboutPage from "./components/AboutPage";
import Getquote from "./components/Getquote";

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
  {
    path:"/roadinfra",
    element: <RoadInfra/>
  },
  {
    path:"/about_us",
    element: <AboutPage/>
  },
  {
    path:"/getquote",
    element: <Getquote/>
  },
  {
    path:"/termsandcondition",
    element: <Terms/>
  },
  {
    path:"/privacypolicy",
    element: <Privacy/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </>
);
