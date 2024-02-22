import React from "react";
import CardsOfMovies from "./CardsOfMovies";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import { useSelector } from "react-redux";

const ListOfmovies = () => {
  usePlayingMoviesNow();

  const movies = useSelector(
    (state: any) => state?.movies?.playingNowMoviesList
  );
  console.log("-----", movies);
  return (
    <div className="bg-black">
      <div className="pl-6 -mt-20 relative z-50">
        <CardsOfMovies title="Popular Movies" moviesList={movies} />
        <CardsOfMovies title="Popular Movies" moviesList={movies} />
        <CardsOfMovies title="Popular Movies" moviesList={movies} />
        <CardsOfMovies title="Popular Movies" moviesList={movies} />
      </div>
    </div>
  );
};

export default ListOfmovies;
