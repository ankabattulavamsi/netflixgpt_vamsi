import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { Background_Image_URL } from "../utils/constants";
import MovieSuggestions from "./MovieSuggestions";

const GptSearchPage = () => {
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
        <MovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
