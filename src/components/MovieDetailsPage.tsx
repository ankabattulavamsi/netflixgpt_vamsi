import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import MovieTrilaerPage from "./MovieTrilaerPage";
import MovieDetailsPageCards from "./MovieDetailsPageCards";

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row bg-black overflow-x-hidden h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex-1 h-1/2 md:h-full">
            <MovieTrilaerPage />
          </div>

          <div className="flex-1 h-1/2 md:h-full">
            <MovieDetailsPageCards />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
