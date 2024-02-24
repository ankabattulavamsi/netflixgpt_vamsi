import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { Background_Image_URL } from "../utils/constants";
import MovieSuggestions from "./MovieSuggestions";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const { movieTitle, moviesResult } = useSelector((store: any) => store?.gpt);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={Background_Image_URL}
          alt="backgroun-image"
        />
      </div>
      <div>
        <SearchBarGpt />
        {/* {!moviesResult ? (
          <h1 className="text-6xl">
            Shimmer UI Shimmer UIShimmer UIShimmer UIShimmer UIShimmer UIShimmer
            UIShimmer UIShimmer UIShimmer UIShimmer UIShimmer UIShimmer
            UIShimmer UIShimmer UIShimmer UIShimmer UIShimmer UIShimmer UI
          </h1>
        ) : (
          <MovieSuggestions />
        )} */}
        <MovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
