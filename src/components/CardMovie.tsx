import React from "react";
import { Movie_Logo_URL } from "../utils/constants";

const CardMovie = ({ posterPath }: any) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 px-2">
      <img
        className="rounded-lg md:w-48 object-cover h-36 w-28"
        src={Movie_Logo_URL + posterPath}
        alt="movie_poster"
      />
    </div>
  );
};

export default CardMovie;
