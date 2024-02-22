import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { movieTrailerPlay } from "../utils/movieSlice";

const useVideoTrailer = (movieId: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideoTrailer();
  }, []);

  const fetchVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );

    const json = await data.json();
    const filterMovie = json?.results?.filter(
      (trailer: any) => trailer?.type == "Trailer"
    );
    const movieTrailer = json?.results ? filterMovie[0] : json.results[0];

    dispatch(movieTrailerPlay(movieTrailer));
  };
};

export default useVideoTrailer;
