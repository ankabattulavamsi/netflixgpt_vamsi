import { Movie_Logo_URL } from "../../utils/constants";
import { recomMovieIcons } from "../../helper/helper";
import { Link } from "react-router-dom";

const RecommentdationList = ({ recomMovie }: any) => {
  if (!recomMovie?.backdrop_path) return null;
  return (
    <Link to={`/browse/${recomMovie?.id}`}>
      <div className="p-4 w-72 relative group/item cursor-pointer">
        <img
          src={Movie_Logo_URL + recomMovie?.backdrop_path}
          alt=""
          className="w-full h-40 rounded-lg group/edit:transition-all  group/edit:duration-500 group/edit:ease-in-out"
        />

        <div className="flex justify-between">
          <p className="text-white text-base">{recomMovie?.title}</p>
          <p className="text-white text-base">
            {(recomMovie?.vote_average * 10).toString().split(".")[0]}%
          </p>
        </div>

        <div className="absolute w-64 top-32 bg-slate-200 rounded-b-lg px-2 py-3 group/edit invisible group-hover/item:visible group/edit:transition-all  group/edit:duration-500 group/edit:ease-in-out">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                <line x1="16" y1="3" x2="16" y2="7" />{" "}
                <line x1="8" y1="3" x2="8" y2="7" />{" "}
                <line x1="4" y1="11" x2="20" y2="11" />{" "}
                <line x1="11" y1="15" x2="12" y2="15" />{" "}
                <line x1="12" y1="15" x2="12" y2="18" />
              </svg>
              <p className="text-black ">{recomMovie?.release_date}</p>
            </div>

            <div className="flex ">
              {recomMovieIcons?.map((each) => (
                <div key={each.id} className="text-black mx-1">
                  {each.svgIcon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommentdationList;
