import CardsOfMovies from "./CardsOfMovies";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePropularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpComingMovies";

const ListOfmovies = () => {
  usePopularMovies();
  usePlayingMoviesNow();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((state: any) => state?.movies);
  return (
    movies.playingNowMoviesList && (
      <div className="bg-black">
        <div className="mt-0 pl-4 md:pl-6 relative z-20">
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
          <CardsOfMovies
            title="Upcoming Movies"
            moviesList={movies?.NewMovies}
          />
        </div>
      </div>
    )
  );
};

export default ListOfmovies;
