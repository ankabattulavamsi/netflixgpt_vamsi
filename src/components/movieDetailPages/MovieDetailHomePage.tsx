import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Movie_Logo_URL } from "../../utils/constants";
import MovieDetailsBanner from "./MovieDetailsBanner";
import MovieDescription from "./MovieDescription";
import Recommendations from "../recommendations/Recommendations";
import SimilarMovies from "../similarMovieList/SimilarMovies";
import MovieBanner from "./MovieBanner";

const MovieDetailHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black pt-20">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="">
          <div className="mb-72 md:mb-0 px-4">
            <MovieBanner />
          </div>
          <Recommendations />
          <SimilarMovies />
        </div>
      )}
    </div>
  );
};

export default MovieDetailHomePage;
