import React from "react";
import { Movie_Logo_URL } from "../utils/constants";
import CardMovie from "./CardMovie";

const CardsOfMovies = ({ title, moviesList }: any) => {
  //   console.log("@@@@", moviesList);
  return (
    <div className="px-6 text-white">
      <h1 className="text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList?.map((movie: any) => {
            return (
              <CardMovie key={movie?.id} posterPath={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsOfMovies;
