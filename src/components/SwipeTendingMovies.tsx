import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

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
import { movieTrailerPlay, topMoviesDetails } from "../utils/movieSlice";

const SwipeTendingMovies = ({ movieSwipe, hadnleSetBackground }: any) => {
  useTopRatedMovies();
  const dispatch = useDispatch();

  //   const movies = useSelector((state: any) => state?.movies.topMovies);

  const handleSetTrailer = (movieTrailer: any) => {
    hadnleSetBackground(movieTrailer);
    dispatch(topMoviesDetails(movieTrailer));
  };

  return (
    <div
      className="px-40 aspect-video pt-[35%] absolute flex items-center w-screen
    mx-auto my-0"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //   clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        // navigation
        spaceBetween={10}
        slidesPerView={5}
        className="h-52 relative bg-opacity-50 border border-red-600 border-spacing-8"
      >
        {movieSwipe?.map((movie: any) => {
          return (
            <SwiperSlide
              className="h-64"
              onClick={() => handleSetTrailer(movie.id)}
            >
              <img
                className="w-auto rounded-sm h-44"
                src={Movie_Logo_URL + movie?.backdrop_path}
                alt="movie-logo"
              />
            </SwiperSlide>
          );
        })}

        <div
          className="slider-controler relative flex justify-center items-center bottom-8
  "
        >
          <div
            className="left-80 transform translate-x-72 !important swiper-button-prev slider-arrow .swiper-slide-shadow-left,
                        .swiper-slide-shadow-right none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow transform -translate-x-80  right-80 text-white !important">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-2 h-2 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="swiper-pagination text-white !important"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwipeTendingMovies;
