import React from "react";
import { Movie_Logo_URL } from "../../utils/constants";

const MovieDetailsBanner = ({ banner }: any) => {
  return (
    <div className="h-full w-full pl-6">
      <img
        src={Movie_Logo_URL + banner}
        alt=""
        className="h-[450px] w-80 rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default MovieDetailsBanner;
