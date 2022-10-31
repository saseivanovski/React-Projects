import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AllProducts from "./AllProducts";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import Electronics from "./Electronics";
import Details from "./Details";

import "./index.css";
import Choices from "./components/Choices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Choices /> },
      {
        path: "/firstPage",
        element: <AllProducts />,
      },
      {
        path: "/secondPage",
        element: <Men />,
      },
      {
        path: "/thirdPage",
        element: <Women />,
      },
      {
        path: "/fourthPage",
        element: <Accessories />,
      },
      {
        path: "/fifthPage",
        element: <Electronics />,
      },
    ],
  },
  {
    path: "/detailsPage/:title",
    element: <Details />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
