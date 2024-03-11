import { useParams } from "react-router-dom";
import RecommentdationList from "./RecommentdationList";
import { useSelector } from "react-redux";
import useRecommendations from "../../Hooks/useRecommendations";

const Recommendations = () => {
  const { id } = useParams();

  const recomMovies = useSelector(
    (store: any) => store.movies.recommendedMovies
  );

  useRecommendations(id);

  if (!recomMovies) return null;

  return (
    <div className="px-8 py-6">
      <h1 className="text-white text-3xl font-semibold ">Recommendations</h1>
      {recomMovies.length !== 0 ? (
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {recomMovies &&
              recomMovies?.map((rec: any) => (
                <RecommentdationList key={rec.id} recomMovie={rec} />
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-4">
          <p className="text-white text-lg">No Recommended Movies here...</p>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
