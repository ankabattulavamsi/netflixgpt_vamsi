import { useSelector } from "react-redux";
import SearchMovieResults from "./SearchMovieResults";

const SearchMovieResult = () => {
  const searchResults = useSelector(
    (state: any) => state.movies.searchMovieResult
  );

  return (
    <div className="px-6 md:px-6 text-white bg-black pt-44 md:pt-20">
      <h1 className="text-2xl py-6">Search Results</h1>
      <div>
        {searchResults.length === 0 ? (
          <div className="flex justify-center">
            <h1 className="text-white text-6xl italic">
              No Results Found Here
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {searchResults?.map((movie: any) => {
              return (
                <SearchMovieResults
                  key={movie?.id}
                  posterPath={movie?.poster_path}
                  id={movie?.id}
                  title={movie?.original_title}
                  relaseDate={movie?.release_date}
                  rating={movie?.vote_average}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMovieResult;
