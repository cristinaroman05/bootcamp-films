import "./MovieMainInfo.scss";
import useFetch from "../../../hooks/useFetch";

const API_URL_CONF = "https://api.themoviedb.org/3/configuration?api_key=";
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const MovieMainInfo = ({ movieData }) => {
  const [movieConf] = useFetch(API_URL_CONF + API_KEY);
  console.log("movie data", movieData);
  return (
    <div className="movie-main-info">
      <div>
        <img className="movie-main-info__img" src={`${movieConf?.images?.base_url}${movieConf?.images?.poster_sizes[2]}${movieData?.poster_path}`} />
      </div>
      <h1 className="movie-main-info__title">{movieData?.original_title}</h1>
      <p className="movie-main-info__subtitle">{movieData?.release_date}</p>
      <p className="movie-main-info__tagline">{movieData?.tagline}</p>
      <div>
        <h3 className="movie-main-info__overview-title">Vista general</h3>
        <p className="movie-main-info__overview-description">{movieData?.overview}</p>
      </div>
    </div>
  );
};
export default MovieMainInfo;
