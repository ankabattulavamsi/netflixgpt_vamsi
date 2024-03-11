import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/autoplay";
import "swiper/css/a11y";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import { useDispatch, useSelector } from "react-redux";
import { Movie_Logo_URL } from "../utils/constants";
import { topMoviesDetails } from "../utils/movieSlice";

const SwipeTendingMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state: any) => state?.movies.topMovies);
  useTopRatedMovies();
  if (movies === null) {
    return null;
  }

  //   const movies = useSelector((state: any) => state?.movies.topMovies);

  const handleSetTrailer = (movieTrailer: any) => {
    // hadnleSetBackground(movieTrailer);
    dispatch(topMoviesDetails(movieTrailer));
  };

  return (
    <div
      className="px-36 aspect-video pt-[35%] absolute flex items-center w-screen
    mx-auto "
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        className="h-52 w-screen relative shadow-2xl bg-slate-950 border border-slate-100"
      >
        {movies?.map((movie: any) => {
          return (
            <SwiperSlide
              key={movie.id}
              className="h-64"
              onClick={() => handleSetTrailer(movie.id)}
            >
              <img
                className="w-auto rounded-sm h-52 px-2"
                src={Movie_Logo_URL + movie?.backdrop_path}
                alt="movie-logo"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwipeTendingMovies;
