import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../utils/movieSlice";

const usePlayingMoviesNow = () => {
  const dispatch = useDispatch();

  const playingMoviesList = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(nowPlayingMovies(data?.results));
  };

  useEffect(() => {
    playingMoviesList();
  }, []);
};

export default usePlayingMoviesNow;
