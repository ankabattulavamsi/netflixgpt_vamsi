import React from "react";
import { Movie_Logo_URL } from "../utils/constants";

const CardMovie = ({ posterPath }: any) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-42 pr-4">
      <img
        className="rounded-lg md:w-48 h-[100%] w-[100%] object-cover"
        src={Movie_Logo_URL + posterPath}
        alt="movie_poster"
      />
    </div>
  );
};

export default CardMovie;
