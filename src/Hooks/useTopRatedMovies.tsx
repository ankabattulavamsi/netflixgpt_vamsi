import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { topRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRateMovies = useSelector((state: any) => state?.movies?.topMovies);

  const topMovies = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(topRatedMovies(data?.results));
  };

  useEffect(() => {
    !topRateMovies && topMovies();
  }, []);
};

export default useTopRatedMovies;
