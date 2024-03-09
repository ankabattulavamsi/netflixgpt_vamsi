import React, { useState } from "react";
import { movieDetailsListIcons } from "../../helper/helper";
import { Modal } from "@mui/material";
import MovieModal from "../movieVideoModel/MovieModal";

const MovieDescription = ({
  title,
  releaseDate,
  originalLanguage,
  runtime,
  tagline,
  overview,
  genres,
  voteAverage,
  videoId,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  const onHandleSetShow = () => {
    setShowModal(false);
    videoId = "";
  };
  return (
    <div className="py-8 ">
      <div>
        <h1 className="text-white text-5xl font-semibold">{title}</h1>
      </div>
      <div className="flex pt-2">
        <h3 className="text-white">
          {releaseDate}
          <span className="ml-1">({originalLanguage})</span>
        </h3>
        <ul className="flex justify-between">
          {genres.map((each: any) => (
            <li className="text-white px-1"> {each.name}, </li>
          ))}
        </ul>
        <h3 className="text-white ml-4">{runtime}min</h3>
      </div>

      <div className="py-4 flex">
        <div className="flex items-center mr-4">
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
                  stroke-dashoffset={voteAverage * 10.0}
                ></circle>
              </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
              <span className="text-center text-2xl font-bold text-white dark:text-white ">
                {(voteAverage * 10).toString().split(".")[0]}%
              </span>
            </div>
          </div>
          <h1 className="text-white text-lg font-semibold ml-2">
            User <br /> Score
          </h1>
        </div>

        <ul className="flex items-center justify-between">
          {movieDetailsListIcons?.map((each: any) => (
            <div className="bg-[#172554] px-4 py-4 rounded-full mx-4">
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

      <div className="">
        <h1 className="text-2xl tracking-wider leading-loose text-white">
          Overview
        </h1>
        <p className="text-white font-serif">{overview}</p>
      </div>
      <MovieModal
        videoId={videoId}
        showModal={showModal}
        handleSetShow={onHandleSetShow}
      />
    </div>
  );
};

export default MovieDescription;
