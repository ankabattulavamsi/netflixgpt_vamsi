import React, { useState } from "react";
import MovieTitleAndDetails from "./MovieTitleAndDetails";
import MovieVideoBackground from "./MovieVideoBackground";
import { useSelector } from "react-redux";
import SwipeTendingMovies from "./SwipeTendingMovies";

const MovieDetailsTrailer = () => {
  const [isActive, setIsActive] = useState<any>([]);
  const movies = useSelector((state: any) => state?.movies.topMovies);

  if (movies === null) {
    return null;
  }

  const movieDetails = movies[1];
  const { original_title, overview, id } = movieDetails;

  const handleChangeTrailer = (movieId: any) => {
    const eachMovieId = movies?.filter((movie: any) => movie.id === movieId);
    setIsActive(eachMovieId);
  };

  return (
    <div className=" bg-black md:pt-0">
      <SwipeTendingMovies
        movieSwipe={movies}
        hadnleSetBackground={handleChangeTrailer}
      />
      <MovieTitleAndDetails
        title={isActive[0]?.original_title}
        review={isActive[0]?.overview}
      />
      <MovieVideoBackground movieId={id} />
    </div>
  );
};

export default MovieDetailsTrailer;
