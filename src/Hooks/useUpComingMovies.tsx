import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { topRatedMovies, upComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMoviesList = useSelector(
    (state: any) => state?.movies?.NewMovies
  );
  console.log("####", upcomingMoviesList);
  const nweMovies = async () => {
    const fetchNowPlayingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );

    const data = await fetchNowPlayingMoviesList.json();
    dispatch(upComingMovies(data?.results));
  };

  useEffect(() => {
    !upcomingMoviesList && nweMovies();
  }, []);
};

export default useUpcomingMovies;
