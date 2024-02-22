import React from "react";
import MovieTitleAndDetails from "./MovieTitleAndDetails";
import MovieVideoBackground from "./MovieVideoBackground";
import { useSelector } from "react-redux";

const MovieDetailsTrailer = () => {
  const movies = useSelector(
    (state: any) => state?.movies?.playingNowMoviesList
  );
  if (movies === null) {
    return null;
  }

  const movieDetails = movies[1];
  const { original_title, overview, id } = movieDetails;
  return (
    <div>
      <MovieTitleAndDetails title={original_title} review={overview} />
      <MovieVideoBackground movieId={id} />
    </div>
  );
};

export default MovieDetailsTrailer;
