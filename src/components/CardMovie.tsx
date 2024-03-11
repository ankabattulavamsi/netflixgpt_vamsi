import { useState } from "react";
import { Movie_Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import MovieModal from "./movieVideoModel/MovieModal";

const CardMovie = ({ posterPath, id, title, rating, relaseDate }: any) => {
  const [showModal, setShowModal] = useState(false);
  if (!posterPath) return null;

  const onHandleSetShow = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="block w-60  group mr-4 p-2 py-4  relative group/item">
        <Link to={`/browse/${id}`}>
          <img
            src={Movie_Logo_URL + posterPath}
            alt="trending"
            className="w-full h-full group-hover/item:opacity-30 group-hover/item:transition-all  group-hover/item:duration-500 group-hover/item:ease-in-out"
          />
        </Link>
        <div className="w-full absolute flex flex-col items-center top-20 group/edit invisible  group-hover/item:visible group/edit:transition-all  group/edit:duration-500 group/edit:ease-in-out">
          <div className="">
            <p className="inline-block text-lg text-white visited:text-slate-400 hover:text-slate-400 after:block  after:scale-x-100 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out  hover:after:border-red-500">
              {title}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <svg
              className="h-14 w-14 text-blue-500 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <line x1="12" y1="8" x2="12" y2="16" />{" "}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <svg
              onClick={() => setShowModal(true)}
              className="h-14 w-14 text-red-500 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
        </div>
      </div>
      <MovieModal
        videoId={id}
        showModal={showModal}
        handleSetShow={onHandleSetShow}
      />
    </>
  );
};

export default CardMovie;
