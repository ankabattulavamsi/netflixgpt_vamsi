import { useSelector } from "react-redux";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import Header from "./Header";
import ListOfmovies from "./ListOfmovies";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import GptSearchPage from "./GptSearchPage";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SearchMovieResult from "./SearchMovieResult";
import Schedule from "./scheduleComp/Schedule";

const BroseMovies = () => {
  usePlayingMoviesNow();
  const showGptSearch = useSelector((state: any) => state.gpt.showGptSearch);
  const searchMovieResults = useSelector(
    (state: any) => state.movies.searchMovieResult
  );
  return (
    <div>
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          {searchMovieResults ? (
            <SearchMovieResult />
          ) : (
            <>
              <MovieDetailsTrailer />
              <Schedule />
              <ListOfmovies />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BroseMovies;
