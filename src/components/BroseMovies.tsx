import { useSelector } from "react-redux";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import ListOfmovies from "./ListOfmovies";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import GptSearchPage from "./GptSearchPage";
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
            <div id="home">
              <SearchMovieResult />
            </div>
          ) : (
            <>
              <div id="home">
                <MovieDetailsTrailer />
              </div>
              <div id="schedule">
                <Schedule />
              </div>
              <div id="blogs">
                <ListOfmovies />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BroseMovies;
