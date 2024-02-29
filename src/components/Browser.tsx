import { useSelector } from "react-redux";
import usePlayingMoviesNow from "../Hooks/usePlayingMoviesNow";
import Header from "./Header";
import ListOfmovies from "./ListOfmovies";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import GptSearchPage from "./GptSearchPage";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Browser = () => {
  usePlayingMoviesNow();
  const showGptSearch = useSelector((state: any) => state.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MovieDetailsTrailer />
          <ListOfmovies />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browser;
