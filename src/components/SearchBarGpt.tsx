import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { getMoviesResult } from "../utils/gptSlice";
import Spinner from "./Spinner";
import SearchSuggestion from "./SearchSuggestion";
import { current } from "@reduxjs/toolkit";

const SearchBarGpt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionList, setShowSuggestionList] = useState([]);
  const [suggestionText, setSuggestionText] = useState<any>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const searchText: any = useRef(null);
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
    setShowSuggestions(false);
    setIsLoading(true);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      suggestionText +
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
    setShowSuggestionList([]);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      suggestionListData();
    }, 1500);
  });

  const suggestionListData = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${suggestionText}`
    );
    const json = await data.json();
    setShowSuggestionList(json[1]);
  };

  const handleSelectSuggestion = (suggestion: any) => {
    // searchText.curerent.value;
    setSuggestionText(suggestion);
  };

  const handleChangeSuggestion = (e: any) => {
    setSuggestionText(e.target.value);
  };

  return (
    <>
      <div
        className="pt-[35%] md:pt-[10%] flex justify-center "
        // onBlur={() => setShowSuggestions(false)}
      >
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            // ref={searchText}
            value={suggestionText}
            onChange={handleChangeSuggestion}
            type="text"
            className="col-span-9 p-4 m-2 rounded-lg"
            placeholder={lang[langKey]?.placeholderSearch}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            onClick={handleSearchMoviesWithLanguage}
            className="col-span-3 bg-red-700 text-white m-2 p-4 rounded-lg -ml-1"
          >
            {isLoading ? <Spinner /> : <>{lang[langKey]?.search}</>}
          </button>
        </form>
      </div>

      {showSuggestions && (
        <div className="flex justify-center ">
          <div
            className="w-full md:w-1/2 bg-gray-500 px-2 py-2 rounded-b-lg 
        "
          >
            {suggestionList?.map((suggestion: any) => (
              <div
                onFocus={() => setShowSuggestions(true)}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="flex items-center hover:shadow-lg py-2 cursor-pointer h-300"
              >
                <svg
                  className="h-5 w-5 text-white ml-4 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <p className="text-white text-lg">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarGpt;
