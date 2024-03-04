import React from "react";
import { Link } from "react-router-dom";
import { Movie_Logo_URL } from "../utils/constants";

const SearchMovieResults = ({ posterPath, id, title }: any) => {
  if (!posterPath) return null;
  return (
    <div
      className="relative block  h-56 w-52 mb-14 shadow-lg
                      bg-gray-600 group mr-4"
    >
      <div
        className="absolute z-100 transform 
          transition duration-1000
                            w-full h-56 group-hover:opacity-90"
      >
        <Link to={`/browse/${id}`} className="">
          <img
            className="w-full h-full object-fill rounded-lg"
            src={Movie_Logo_URL + posterPath}
            alt="movie_poster"
          />
        </Link>
      </div>
      <div className="relative p-4">
        <div className="">
          {/* Hidden content */}
          <div
            className="transition-all transform
                                opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y"
          >
            <div className="w-full">
              <div>
                <h1 className="text-2xl text-white font-bold">{title}</h1>
              </div>

              <div className=" min-w-max p-2  bg-gradient-to-b from-black z-10 flex justify-between items-center">
                <svg
                  className="w-10 h-10 text-gray-800 bg-white dark:text-white rounded-full p-2 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>

                <svg
                  className="h-11 w-11 text-slate-400 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <circle cx="12" cy="12" r="10" />{" "}
                  <line x1="12" y1="8" x2="12" y2="16" />{" "}
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>

                <svg
                  className="h-10 w-10 mr-2 text-slate-400 border-slate-400 border-2 rounded-full p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* End of hidden content */}
        </div>
      </div>
    </div>
  );
};

export default SearchMovieResults;
