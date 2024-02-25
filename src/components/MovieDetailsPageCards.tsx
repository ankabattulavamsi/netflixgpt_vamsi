import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { detailsOfMovie } from "../utils/movieSlice";
import Spinner from "./Spinner";
import useMovieDetails from "../Hooks/useMovieDetails";

const MovieDetailsPageCards = () => {
  const { id } = useParams();
  const movieDetails = useSelector((state: any) => state?.movies?.movieDetails);

  useMovieDetails(id);

  if (!movieDetails) return <Spinner />;
  const {
    title,
    budget,
    genres,
    overview,
    popularity,
    release_date,
    revenue,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div className="text-white p-4 m-4 bg-gray-900 rounded-lg h-screen overflow-x-hidden border border-b-white">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4">
        About this Movie
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Name:</h2>
          <p>{title}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Overview:</h2>
          <p>{overview}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Budget:</h2>
          <p>${budget / 1000000} million</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Revenue:</h2>
          <p>${revenue / 1000000} million</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Popularity:</h2>
          <p>{popularity}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">
            Release Date:
          </h2>
          <p>{release_date}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Average Votes:</h2>
          <p>{vote_average}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Vote Count:</h2>
          <p>{vote_count}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Genres: </h2>
          {genres && genres.length > 0 ? (
            <ul>
              {genres.map(
                (
                  genre: {
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <li key={index}>{genre.name}</li>
                )
              )}
            </ul>
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </div>
      <p>movie details</p>
    </div>
  );
};

export default MovieDetailsPageCards;
