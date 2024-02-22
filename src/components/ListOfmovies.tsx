import React from "react";
import CardsOfMovies from "./CardsOfMovies";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePropularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpComingMovies";

const ListOfmovies = () => {
  usePlayingMoviesNow();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((state: any) => state?.movies);
  console.log("-----", movies?.topMovies);
  return (
    <div className="bg-black">
      <div className="pl-6 -mt-24 relative z-50 py-2">
        <CardsOfMovies
          title="Popular Movies"
          moviesList={movies?.popularMovies}
        />
        <CardsOfMovies
          title="Playing Now Movies"
          moviesList={movies?.playingNowMoviesList}
        />
        <CardsOfMovies
          title="Top Rated Movies"
          moviesList={movies?.topMovies}
        />
        <CardsOfMovies title="Upcoming Movies" moviesList={movies?.NewMovies} />
      </div>
    </div>
  );
};

export default ListOfmovies;
