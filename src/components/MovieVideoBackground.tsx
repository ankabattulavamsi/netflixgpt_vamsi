import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { movieTrailerPlay } from "../utils/movieSlice";
import useVideoTrailer from "../Hooks/userVideoTrailer";

const MovieVideoBackground = ({ movieId }: any) => {
  const trailerKey = useSelector(
    (store: any) => store?.movies?.moviesTrailer?.key
  );

  useVideoTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/wYmtRhKvmVE?si=" +
          trailerKey +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default MovieVideoBackground;
