import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../Hooks/userVideoTrailer";
import { useParams } from "react-router-dom";

const MovieTrilaerPage = () => {
  const movieId = useParams();
  const movieTrailer = useSelector(
    (store: any) => store?.movies?.moviesTrailer
  );

  useVideoTrailer(movieId);

  return (
    <div className="h-full w-full relative">
      {movieTrailer && (
        <div className="aaspect-w-16 aspect-h-9">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/wYmtRhKvmVE?si=${movieTrailer?.key}&autoplay=1&mute=1`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {!movieTrailer && (
        <div className="text-white text-xl absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1> No trailer for this video is found </h1>
        </div>
      )}
    </div>
  );
};

export default MovieTrilaerPage;
