import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { topRatedMovies, upComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const nweMovies = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    console.log("22222", data);
    dispatch(upComingMovies(data?.results));
  };

  useEffect(() => {
    nweMovies();
  }, []);
};

export default useUpcomingMovies;
