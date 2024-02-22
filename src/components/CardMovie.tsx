import React from "react";
import { Movie_Logo_URL } from "../utils/constants";

const CardMovie = ({ posterPath }: any) => {
  return (
    <div className="w-28 px-2">
      <img
        className="rounded-lg object-fill"
        src={Movie_Logo_URL + posterPath}
        alt="movie_poster"
      />
    </div>
  );
};

export default CardMovie;
