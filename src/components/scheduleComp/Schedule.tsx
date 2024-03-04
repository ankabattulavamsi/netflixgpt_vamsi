import React, { useEffect, useState } from "react";
import { options, trendingSetApi } from "../../utils/constants";
import ScheduleMovies from "./ScheduleMovies";

const Schedule = () => {
  const [dayTrending, setDayTrending] = useState("day");
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${dayTrending}?language=en-US`,
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

  console.log("trending", dayTrending);

  return (
    <div className="px-10 bg-black">
      <div>
        <h1 className="text-3xl py-4 text-white">Schedule</h1>
      </div>
      <div className="inline-flex rounded-md shadow-sm">
        <button
          onChange={handleTrendingToday}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Today
        </button>

        <button
          onChange={handleTrendingWeek}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          This Week
        </button>
      </div>

      <div className="flex flex-wrap">
        {trendingData?.map((movie: any) => (
          <ScheduleMovies movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
