import React from "react";
import { useSelector } from "react-redux";
import CardsOfMovies from "./CardsOfMovies";

const MovieSuggestions = () => {
  const { movieTitle, moviesResult } = useSelector((store: any) => store?.gpt);
  if (!movieTitle) return null;
  return (
    <div className=" p-4 m-4 bg-black text-white bg-opacity-90 rounded-2xl">
      <div className="">
        {movieTitle.map((movieName: any, index: number) => (
          <CardsOfMovies
            key={movieName}
            title={movieName}
            moviesList={moviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
