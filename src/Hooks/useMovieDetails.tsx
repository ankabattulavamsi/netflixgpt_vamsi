import { useEffect } from "react";
import { detailsOfMovie } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useMovieDetails = (id: any) => {
  //   const movieDetails = useSelector((state: any) => state?.movies?.movieDetails);
  const dispatch = useDispatch();

  const fetchMovieDetail = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    const json = await data.json();
    dispatch(detailsOfMovie(json));
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);
};

export default useMovieDetails;
