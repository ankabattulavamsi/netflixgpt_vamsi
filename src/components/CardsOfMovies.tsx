import CardMovie from "./CardMovie";

const CardsOfMovies = ({ title, moviesList }: any) => {
  return (
    <div className="px-1 md:px-6 text-white">
      <h1 className="text-lg md:text-2xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList?.map((movie: any) => {
            console.log("movie-detail", movie);
            return (
              <CardMovie
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
      </div>
    </div>
  );
};

export default CardsOfMovies;
