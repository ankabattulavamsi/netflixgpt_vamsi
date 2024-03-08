import { Modal } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useVideoTrailer from "../../Hooks/userVideoTrailer";
import { useDispatch, useSelector } from "react-redux";
import { movieTrailerPlay } from "../../utils/movieSlice";
import { options } from "../../utils/constants";

const MovieModal = ({ showModal, handleSetShow, videoId }: any) => {
  const videoKey = useSelector((store: any) => store?.movies?.moviesTrailer);

  const dispatch = useDispatch();
  const videoTrailer = useSelector(
    (state: any) => state?.movies?.moviesTrailer
  );

  useEffect(() => {
    !videoTrailer && fetchVideoTrailer();
  }, []);

  const fetchVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos`,
      options
    );

    const json = await data.json();
    const filterMovie = json?.results?.filter(
      (trailer: any) => trailer?.type == "Trailer"
    );
    const movieTrailer = filterMovie.length ? filterMovie[0] : json.results[0];
    console.log("movieTrailer-each-data", movieTrailer);
    dispatch(movieTrailerPlay(movieTrailer));
  };

  console.log("video-id", videoKey && videoKey);
  return (
    <Modal
      open={showModal}
      onClose={handleSetShow}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="relative  w-10/12 h-5/6  left-[8%] top-[6%] bg-black shadow-lg">
        <div className=" w-full top-2 z-10 flex justify-between">
          <p className="text-white">Play Trailer</p>
          <button onClick={handleSetShow}>
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <>
          {videoKey && (
            <div className="aspect-w-16 aspect-h-9 top-10">
              <iframe
                className="absolute top-10 w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey.key}?si=czFskwmrf2RVx6ua&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}

          {!videoKey && (
            <div className="text-white text-xl absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h1> No trailer for this video is found </h1>
            </div>
          )}
        </>
      </div>
    </Modal>
  );
};

export default MovieModal;
