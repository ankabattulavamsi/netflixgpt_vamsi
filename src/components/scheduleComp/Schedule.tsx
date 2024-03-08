import React, { useEffect, useState } from "react";
import { MOVIES_API_KEY, options, trendingSetApi } from "../../utils/constants";
import ScheduleMovies from "./ScheduleMovies";

const Schedule = () => {
  const [dayTrending, setDayTrending] = useState("week");
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    fetchTrendingMovies();
  }, [dayTrending]);

  const fetchTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${dayTrending}?api_key=${MOVIES_API_KEY}`,
      options
    );

    const json = await data.json();
    setTrendingData(json?.results);
  };

  const handleTrendingToday = () => {
    setDayTrending("day");
  };

  const handleTrendingWeek = () => {
    setDayTrending("week");
  };

  return (
    <div className="px-10 bg-black">
      <div>
        <h1 className="inline-block w-60 text-3xl py-4 after:mb-2 text-white after:block after:border-b-4 after:origin-center   hover:after:scale-x-100  after:border-red-500 ">
          Trending Movies
        </h1>
      </div>
      <div className="inline-flex rounded-md shadow-sm">
        <button
          onClick={handleTrendingToday}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Today
        </button>

        <button
          onClick={handleTrendingWeek}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          This Week
        </button>
      </div>

      <div className="flex flex-wrap">
        {trendingData &&
          trendingData?.map((movie: any) => (
            <ScheduleMovies movieData={movie} />
          ))}
      </div>
    </div>
  );
};

export default Schedule;
