import React from "react";
import { useSelector } from "react-redux";

const MovieTitleAndDetails = ({ title, review }: any) => {
  return (
    <div className="w-screen aspect-video pt-[16%] md:pt-[10%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl  font-bold tracking-wider">
        {title}
      </h1>
      <p className="hidden md:inline-block w-2/4  text-md py-4 font-serif-Georgia italic leading-7">
        {review}
      </p>
      <div className="my-4 md:m-0">
        <button className="py-2 md:py-4 px-4 md:px-9 p-4  rounded-md bg-white bg-opacity-80 hover:bg-opacity-100 text-xl text-black font-medium md:font-bold">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block m-2 p-4 px-9 rounded-md bg-gray-500 text-xl hover:opacity-70 text-white font-bold opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitleAndDetails;
