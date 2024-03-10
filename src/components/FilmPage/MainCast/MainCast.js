import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const API_KEY = process.env.REACT_APP_API_KEY;

const MainCast = ({ credits }) => {
  const { filmId } = useParams();
  const API_URL_CREDITS = `${process.env.REACT_APP_API_URL}movie/${filmId}/credits?api_key=${API_KEY}`;
  const [creditsData] = useFetch(API_URL_CREDITS);
  console.log(creditsData);
  return (
    <div className="movie-main-info">
      <h1>Reparto Principal</h1>
      <div className="films page__content">
        {creditsData?.cast?.map((cast) => (
          <div key={cast.id} className="card">
            <img className="card__img" alt={cast.name} src={`${"http://image.tmdb.org/t/p/w200"}${cast.profile_path}`}></img>
            <div>
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainCast;
