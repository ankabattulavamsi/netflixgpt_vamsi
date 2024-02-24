import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovieMemorize = useSelector(
    (state: any) => state?.movies?.popularMovies
  );
  const popularMovies = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    !popularMovieMemorize && popularMovies();
  }, []);
};

export default usePopularMovies;
