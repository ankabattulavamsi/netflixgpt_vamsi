import React from "react";
import { Movie_Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CardMovie = ({ posterPath, id }: any) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 md:w-50 cursor-pointer pr-4">
      <Link to={`/browse/${id}`}>
        <img
          className="rounded-lg  object-cover"
          src={Movie_Logo_URL + posterPath}
          alt="movie_poster"
        />
      </Link>
    </div>
  );
};

export default CardMovie;
