import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
