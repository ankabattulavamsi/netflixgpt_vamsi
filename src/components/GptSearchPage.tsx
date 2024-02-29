import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { Background_Image_URL } from "../utils/constants";
import MovieSuggestions from "./MovieSuggestions";
import { useSelector } from "react-redux";
import CardsOfMovies from "./CardsOfMovies";
import Spinner from "./Spinner";

const GptSearchPage = () => {
  const { movieTitle, moviesResult } = useSelector((store: any) => store?.gpt);
  const a = [1, 2, 3, 4];
  return (
    <div>
      <div className="fixed  -z-10">
        <img
          className="h-screen w-screen object-none"
          src={Background_Image_URL}
          alt="backgroun-image"
        />
      </div>
      <div>
        <SearchBarGpt />

        {!movieTitle ? (
          <div className="flex flex-wrap px-6 py-20">
            {a.map((each: any) => (
              <div
                role="status"
                className="mx-4 bg-zinc-700 w-56 h-36 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-42 mb-4 m-3"></div>
                <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-42 mb-4 m-3"></div>
                <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-42 mb-4 m-3"></div>
                <div className="flex items-center mt-4">
                  <svg
                    className="w-8 h-8 me-3 text-gray-200 dark:text-gray-700 mx-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div className="w-32 h-2 bg-gray-600 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>

                <span className="sr-only">Loading...</span>
              </div>
            ))}
          </div>
        ) : (
          <MovieSuggestions />
        )}
      </div>
    </div>
  );
};

export default GptSearchPage;
