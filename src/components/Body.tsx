import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import BroseMovies from "./BroseMovies";
import Schedule from "./scheduleComp/Schedule";
import MovieDetailHomePage from "./movieDetailPages/MovieDetailHomePage";

const Body = () => {
  const appStore = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
      children: [
        {
          path: "/browse",
          element: <BroseMovies />,
        },
        {
          path: "/browse/:id",
          element: <MovieDetailHomePage />,
        },
      ],
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
  ]);

  return <RouterProvider router={appStore} />;
};

export default Body;
