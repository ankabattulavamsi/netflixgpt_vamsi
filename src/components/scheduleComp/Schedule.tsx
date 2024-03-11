import { useEffect, useState } from "react";
import { MOVIES_API_KEY, options } from "../../utils/constants";
import ScheduleMovies from "./ScheduleMovies";
import { useDispatch, useSelector } from "react-redux";
import { trendingMoviesList } from "../../utils/movieSlice";

const Schedule = () => {
  const [dayTrending, setDayTrending] = useState("day");
  const dispatch = useDispatch();
  const trendMovies = useSelector(
    (store: any) => store?.movies?.trendingMovies
  );

  useEffect(() => {
    fetchTrendingMovies();
  }, [dayTrending]);

  const fetchTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${dayTrending}?api_key=${MOVIES_API_KEY}`,
      options
    );

    const json = await data.json();
    dispatch(trendingMoviesList(json?.results));
  };

  const handleTrendingToday = () => {
    setDayTrending("day");
  };

  const handleTrendingWeek = () => {
    setDayTrending("week");
  };

  return (
    <div className="px-10 bg-black">
      <div className="flex md:justify-start justify-center">
        <h1 className="inline-block w-60 text-3xl py-4 after:mb-2 text-white after:block after:border-b-4 after:origin-center   hover:after:scale-x-100  after:border-red-500 ">
          Trending Movies
        </h1>
      </div>
      <div className="w-full">
        <button
          onClick={handleTrendingToday}
          type="button"
          className={`${
            dayTrending === "day"
              ? "w-6/12 md:w-32 px-6 py-3 text-sm font-medium text-white bg-red-600 border border-white rounded-s-lg "
              : "w-6/12 md:w-32 px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg"
          }`}
        >
          Today
        </button>

        <button
          onClick={handleTrendingWeek}
          type="button"
          className={`${
            dayTrending === "week"
              ? "w-6/12 md:w-32 px-6 py-3 text-sm font-medium text-white bg-red-600 border border-white rounded-e-lg "
              : "w-6/12 md:w-32 px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg"
          }`}
        >
          This Week
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {trendMovies &&
          trendMovies?.map((movie: any) => (
            <ScheduleMovies key={movie.id} movieData={movie} />
          ))}
      </div>
    </div>
  );
};

export default Schedule;
