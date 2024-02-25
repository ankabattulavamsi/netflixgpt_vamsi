import CardMovie from "./CardMovie";

const CardsOfMovies = ({ title, moviesList }: any) => {
  return (
    <div className="px-1 md:px-6 text-white">
      <h1 className="text-lg md:text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList?.map((movie: any) => {
            return (
              <>
                <CardMovie
                  key={movie?.id}
                  posterPath={movie?.poster_path}
                  id={movie?.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsOfMovies;
