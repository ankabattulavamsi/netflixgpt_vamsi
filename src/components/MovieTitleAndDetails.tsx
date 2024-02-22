import React from "react";
import { useSelector } from "react-redux";

const MovieTitleAndDetails = ({ title, review }: any) => {
  return (
    <div className="w-screen aspect-video absolute pt-[22%] px-12 text-white bg-gradient-to-r from from-zinc-900">
      <h1 className="text-5xl font-bold tracking-wider">{title}</h1>
      <p className="w-2/4 text-md py-4 font-serif-Georgia italic leading-7">
        {review}
      </p>
      <div className="my-4">
        <button className="p-4 px-9 rounded-md bg-white bg-opacity-80 hover:bg-opacity-100 text-xl text-black font-bold">
          ▶️ Play
        </button>
        <button className="m-2 p-4 px-9 rounded-md bg-gray-500 text-xl hover:opacity-70 text-white font-bold opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitleAndDetails;
