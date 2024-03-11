import { useEffect, useState } from "react";
import MovieTitleAndDetails from "./MovieTitleAndDetails";
import MovieVideoBackground from "./MovieVideoBackground";
import { useSelector } from "react-redux";
import SwipeTendingMovies from "./SwipeTendingMovies";

const MovieDetailsTrailer = () => {
  const [randomNum, setRanomNum] = useState<any>(0);

  useEffect(() => {
    const min = 0;
    const max = 20;
    const ramNum = min + Math.random() * (max - min);
    setRanomNum(ramNum.toString().split(".")[0]);
  }, [randomNum]);

  const movies = useSelector((state: any) => state?.movies.topMovies);

  if (movies === null) {
    return null;
  }

  const movieDetails = movies[randomNum];
  const { original_title, overview, id } = movieDetails;

  return (
    <div className=" bg-black pt-[35%] md:pt-0">
      <div className="hidden md:inline-block">
        <SwipeTendingMovies />
      </div>
      <MovieTitleAndDetails
        title={original_title}
        review={overview}
        trailId={id}
      />
      <MovieVideoBackground moviePoster={id} />
    </div>
  );
};

export default MovieDetailsTrailer;
