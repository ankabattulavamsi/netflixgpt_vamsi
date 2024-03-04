import React from "react";
import { Movie_Logo_URL } from "../../utils/constants";

const ScheduleMovies = ({ movieData }: any) => {
  return (
    <div className=" p-2">
      <img
        src={Movie_Logo_URL + movieData?.poster_path}
        alt="trending"
        className="w-52"
      />
    </div>
  );
};

export default ScheduleMovies;
