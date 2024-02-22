import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import Header from "./Header";
import ListOfmovies from "./ListOfmovies";
import MovieDetailsTrailer from "./MovieDetailsTrailer";

const Browser = () => {
  usePlayingMoviesNow();

  return (
    <div>
      <Header />
      <MovieDetailsTrailer />
      <ListOfmovies />

      {/* 
        -mainMovieContainer 
         -title container

        -moviesListContainer
          -movieCards
      */}
    </div>
  );
};

export default Browser;
