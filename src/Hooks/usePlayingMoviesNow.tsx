import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovies } from "../utils/movieSlice";

const usePlayingMoviesNow = () => {
  const dispatch = useDispatch();
  const playNowMovies = useSelector(
    (state: any) => state?.movies?.playingNowMoviesList
  );
  const playingMoviesList = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(nowPlayingMovies(data?.results));
  };

  useEffect(() => {
    !playNowMovies && playingMoviesList();
  }, []);
};

export default usePlayingMoviesNow;
