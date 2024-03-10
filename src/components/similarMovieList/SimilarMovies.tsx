import React, { useEffect, useState } from "react";
import { options } from "../../utils/constants";
import RecommentdationList from "../recommendations/RecommentdationList";

const SimilarMovies = () => {
  const [similarData, setSimilarData] = useState([]);
  useEffect(() => {
    fetchSimilarMovies();
  });

  const fetchSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/238/similar?language=en-US&page=1",
      options
    );
    const json = await data.json();
    setSimilarData(json.results);
  };

  return (
    <div className="px-8 py-6">
      <h1 className="text-white text-3xl font-semibold ">Similar Movies</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {similarData &&
            similarData?.map((rec: any) => (
              <RecommentdationList key={rec.id} recomMovie={rec} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
