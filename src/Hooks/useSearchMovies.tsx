import React from "react";
import { MOVIES_API_KEY, movieSearchAPI } from "../utils/constants";
import { useDispatch } from "react-redux";
import { searchResultMovies } from "../utils/movieSlice";

const useSearchMovies = ({ text, searchResult }: any) => {
  const dispatch = useDispatch();
  const handleSearchMovies = async () => {
    const data = await fetch(
      `${movieSearchAPI}query=${
        text || searchResult
      }&include_adult=true&api_key=${MOVIES_API_KEY}`
    );
    const json = await data.json();

    dispatch(searchResultMovies(json.results));
  };
};

export default useSearchMovies;
