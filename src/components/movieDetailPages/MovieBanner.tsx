import React, { useState } from "react";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { Movie_Logo_URL } from "../../utils/constants";
import MovieDetailsBanner from "./MovieDetailsBanner";
import MovieDescription from "./MovieDescription";

const MovieBanner = () => {
  const { id } = useParams();
  const movieDetails = useSelector((state: any) => state?.movies?.movieDetails);

  useMovieDetails(id);

  if (!movieDetails) return null;

  const { backdrop_path, poster_path } = movieDetails;
  return (
    <div className="relative">
      <img
        className=" h-[550px] w-full object-fill bg-no-repeat bg-right opacity-25 left-60"
        src={Movie_Logo_URL + backdrop_path}
        alt=""
      />
      <div className="absolute top-10 p-4 flex flex-col md:flex-row md:justify-between w-full mb-32">
        <div className="hidden md:inline-block w-4/12">
          <MovieDetailsBanner banner={poster_path} />
        </div>
        <div className="pt-4 w-8/12">
          <MovieDescription />
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
