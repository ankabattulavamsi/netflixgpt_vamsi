import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { recommendedMovieList } from "../utils/movieSlice";

const useRecommendations = (id: any) => {
  const dispatch = useDispatch();
  const recomMovies = useSelector(
    (store: any) => store.movies.recommendedMovies
  );

  const fetchRecomMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    );
    const json = await data.json();
    dispatch(recommendedMovieList(json.results));
  };

  useEffect(() => {
    !recomMovies && fetchRecomMovies();
  }, []);
};

export default useRecommendations;
