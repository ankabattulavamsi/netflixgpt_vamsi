import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../../utils/constants";
import RecommentdationList from "./RecommentdationList";

const Recommendations = () => {
  const [recomData, setRecomData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchRecomMovies();
  }, []);

  const fetchRecomMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    );
    const json = await data.json();
    setRecomData(json?.results);
  };

  return (
    <div className="px-8 py-6">
      <h1 className="text-white text-3xl font-semibold ">Recommendations</h1>
      {recomData.length !== 0 ? (
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {recomData &&
              recomData?.map((rec: any) => (
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
