import React from "react";
import { Movie_Logo_URL } from "../../utils/constants";

const RecommentdationList = ({ recomMovie }: any) => {
  if (!recomMovie?.backdrop_path) return null;
  return (
    <div className="p-4 w-60">
      <img
        src={Movie_Logo_URL + recomMovie?.backdrop_path}
        alt=""
        className="w-full h-32 rounded-lg"
      />
      <p className="text-white">{recomMovie?.title}</p>
    </div>
  );
};

export default RecommentdationList;
