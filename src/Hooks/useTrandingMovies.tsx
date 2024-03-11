import React, { useEffect } from "react";
import { MOVIES_API_KEY, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { trendingMoviesList } from "../utils/movieSlice";

const useTrandingMovies = (toggleTrend: any) => {
  const dispatch = useDispatch();
  const trendMovies = useSelector(
    (store: any) => store?.movies?.trendingMovies
  );
  useEffect(() => {
    !trendMovies && fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${toggleTrend}?api_key=${MOVIES_API_KEY}`,
      options
    );

    const json = await data.json();
    dispatch(trendingMoviesList(json?.results));
  };
};

export default useTrandingMovies;
