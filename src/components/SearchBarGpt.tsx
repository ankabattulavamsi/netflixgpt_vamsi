import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { getMoviesResult } from "../utils/gptSlice";
import Spinner from "./Spinner";

const SearchBarGpt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchText: any = useRef(null);
  const langKey: any = useSelector((state: any) => state?.language?.lang);
  const dispatch = useDispatch();

  const searchTmbdMovie = async (movie: any) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data?.json();
    return json?.results;
  };

  const handleSearchMoviesWithLanguage = async () => {
    setIsLoading(true);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 8 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const searchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = searchResult?.choices[0]?.message?.content?.split(",");

    const openaiSearchResult: any = gptMovies?.map((movie: any) =>
      searchTmbdMovie(movie)
    );

    const promiseResolve = await Promise.all(openaiSearchResult);
    dispatch(
      getMoviesResult({
        movieTitle: gptMovies,
        moviesResult: promiseResolve,
      })
    );
    setIsLoading(false);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-2 rounded-lg"
          placeholder={lang[langKey]?.placeholderSearch}
        />
        <button
          onClick={handleSearchMoviesWithLanguage}
          className="col-span-3 bg-red-700 text-white m-2 p-4 rounded-lg -ml-1"
        >
          {isLoading ? <Spinner /> : <>{lang[langKey]?.search}</>}
        </button>
      </form>
    </div>
  );
};

export default SearchBarGpt;
