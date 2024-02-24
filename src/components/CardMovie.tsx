import React from "react";
import { Movie_Logo_URL } from "../utils/constants";

const CardMovie = ({ movieAllDetails }: any) => {
  console.log("movieAllDetails", movieAllDetails);
  if (!movieAllDetails) return null;
  return (
    <div className="w-40 md:w-50 cursor-pointer pr-4">
      <img
        className="translate-y-6 rounded-lg  object-cover"
        src={Movie_Logo_URL + movieAllDetails}
        alt="movie_poster"
      />
    </div>
  );
};

export default CardMovie;
