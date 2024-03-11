import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { similarMoviesList } from "../utils/movieSlice";

const useSimilarMovies = (id: any) => {
  const dispatch = useDispatch();
  const similarMovies = useSelector(
    (store: any) => store?.movies?.similarMovies
  );
  useEffect(() => {
    !similarMovies && fetchSimilarMovies();
  });

  const fetchSimilarMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const json = await data.json();
    dispatch(similarMoviesList(json.results));
  };
  return similarMovies;
};

export default useSimilarMovies;
