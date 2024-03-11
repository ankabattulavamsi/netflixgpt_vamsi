import { useSelector } from "react-redux";
import useVideoTrailer from "../Hooks/userVideoTrailer";

const MovieVideoBackground = ({ moviePoster }: any) => {
  const trailerKey = useSelector(
    (store: any) => store?.movies?.moviesTrailer?.key
  );

  useVideoTrailer(moviePoster);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?si=czFskwmrf2RVx6ua&autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default MovieVideoBackground;
