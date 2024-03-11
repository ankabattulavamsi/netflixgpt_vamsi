import RecommentdationList from "../recommendations/RecommentdationList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSimilarMovies from "../../Hooks/useSimilarMovies";

const SimilarMovies = () => {
  const { id } = useParams();
  const similarMovies = useSelector(
    (store: any) => store?.movies?.similarMovies
  );
  useSimilarMovies(id);

  return (
    <div className="px-8 py-6">
      <h1 className="text-white text-3xl font-semibold ">Similar Movies</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {similarMovies &&
            similarMovies?.map((rec: any) => (
              <RecommentdationList key={rec.id} recomMovie={rec} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
