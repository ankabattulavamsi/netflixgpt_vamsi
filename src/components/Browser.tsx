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
import { useEffect, useState } from "react";

const Browser = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.screenY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);
  return (
    <div>
      <Header scroll={scroll} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Browser;
