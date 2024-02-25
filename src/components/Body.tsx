import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import MovieDetailsPage from "./MovieDetailsPage";

const Body = () => {
  const appStore = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/browse/:id",
      element: <MovieDetailsPage />,
    },
  ]);

  return <RouterProvider router={appStore} />;
};

export default Body;
