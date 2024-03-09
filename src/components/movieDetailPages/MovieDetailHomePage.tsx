import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Movie_Logo_URL } from "../../utils/constants";
import MovieDetailsBanner from "./MovieDetailsBanner";
import MovieDescription from "./MovieDescription";
import Recommendations from "../recommendations/Recommendations";

const MovieDetailHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const movieDetails = useSelector((state: any) => state?.movies?.movieDetails);

  useMovieDetails(id);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!movieDetails) return null;

  const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    original_language,
    runtime,
    tagline,
    overview,
    genres,
    vote_average,
  } = movieDetails;

  return (
    <div className="bg-black py-20">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="relative h-[550px] w-screen">
            <img
              className="h-full w-full object-fill bg-no-repeat bg-right opacity-25 left-60"
              src={Movie_Logo_URL + backdrop_path}
              alt=""
            />
            <div className="absolute top-10 p-4 flex w-full ">
              <div className="w-4/12">
                <MovieDetailsBanner banner={poster_path} />
              </div>
              <div className="w-10/12 ">
                <MovieDescription
                  title={original_title}
                  releaseDate={release_date}
                  originalLanguage={original_language}
                  runtime={runtime}
                  tagline={tagline}
                  overview={overview}
                  genres={genres}
                  voteAverage={vote_average}
                  videoId={id}
                />
              </div>
            </div>
          </div>

          <div>
            <Recommendations />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailHomePage;
