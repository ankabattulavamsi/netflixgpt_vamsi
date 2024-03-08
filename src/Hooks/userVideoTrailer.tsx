import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { movieTrailerPlay } from "../utils/movieSlice";

const useVideoTrailer = (movieId: any) => {
  const dispatch = useDispatch();
  // const videoTrailer = useSelector(
  //   (state: any) => state?.movies?.moviesTrailer
  // );

  // useEffect(() => {
  //   !videoTrailer && fetchVideoTrailer();
  // }, []);

  // const fetchVideoTrailer = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}/videos`,
  //     options
  //   );

  //   const json = await data.json();
  //   const filterMovie = json?.results?.filter(
  //     (trailer: any) => trailer?.type == "Trailer"
  //   );
  //   const movieTrailer = filterMovie.length ? filterMovie[0] : json.results[0];

  //   dispatch(movieTrailerPlay(movieTrailer));
  // };
  // return videoTrailer;
};

export default useVideoTrailer;
