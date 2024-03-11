import React, { useState } from "react";
import { movieDetailsListIcons } from "../../helper/helper";
import { Modal } from "@mui/material";
import MovieModal from "../movieVideoModel/MovieModal";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../Hooks/useMovieDetails";

const MovieDescription = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const movieDetails = useSelector((state: any) => state?.movies?.movieDetails);

  const {
    original_title,
    release_date,
    original_language,
    runtime,
    tagline,
    overview,
    genres,
    vote_average,
  } = movieDetails;

  useMovieDetails(id);
  const onHandleSetShow = (id: any) => {
    setShowModal(false);
    id = "";
  };

  if (!movieDetails) return null;

  return (
    <div className="py-8">
      <div>
        <h1 className="text-white text-3xl md:text-5xl font-semibold">
          {original_title}
        </h1>
      </div>
      <div className="flex pt-2 justify-between md:justify-start">
        <p className="text-white">
          {release_date}
          <span className="ml-1">({original_language})</span>
        </p>
        <ul className="ml-2 flex flex-col md:flex-row justify-between">
          {genres.map((each: any, index: number) => (
            <li key={each.id} className="text-white px-1">
              {" "}
              {each.name},{" "}
            </li>
          ))}
        </ul>
        <h3 className="text-white md:ml-4">{runtime}min</h3>
      </div>

      <div className="py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center mr-0 md:mr-4">
          <div className="relative size-16">
            <svg
              className="size-full"
              width="20"
              height="20"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Background Circle --> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200 dark:text-gray-700"
                stroke-width="1"
              ></circle>
              {/* <!-- Progress Circle inside a group with rotation --> */}
              <g className="origin-center -rotate-90 transform">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-blue-600 dark:text-blue-500"
                  stroke-width="1"
                  stroke-dasharray="100"
                  stroke-dashoffset={vote_average * 10.0}
                ></circle>
              </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-center text-2xl font-bold text-white dark:text-white ">
                {(vote_average * 10).toString().split(".")[0]}%
              </span>
            </div>
          </div>
          <h1 className="text-white text-lg font-semibold ml-2">
            User <br /> Score
          </h1>
        </div>

        <ul className="flex items-center justify-center ml-16 md:ml-0">
          {movieDetailsListIcons?.map((each: any) => (
            <div
              key={each.id}
              className="bg-[#172554] px-4 py-4 rounded-full mx-4"
            >
              {each.svgIcon}
            </div>
          ))}
        </ul>

        <div
          className="flex items-center mx-2"
          onClick={() => setShowModal(true)}
        >
          <svg
            className="h-6 w-6 text-white mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <p className="text-white text-lg font-medium">Play Trailer</p>
        </div>
      </div>

      <div className="py-4">
        <p className="text-stone-400 ">{tagline}</p>
      </div>

      <div className="w-full">
        <h1 className="text-2xl tracking-wider leading-loose text-white">
          Overview
        </h1>
        <p className="text-white font-serif w-full">{overview}</p>
      </div>
      <MovieModal
        videoId={id}
        showModal={showModal}
        handleSetShow={onHandleSetShow}
      />
    </div>
  );
};

export default MovieDescription;
