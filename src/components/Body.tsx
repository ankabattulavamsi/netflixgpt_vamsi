import React from "react";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appStore = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return <RouterProvider router={appStore} />;
};

export default Body;
