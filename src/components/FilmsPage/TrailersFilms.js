import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import TrailerCard from "./TrailerCard";

const API_URL_ = `${process.env.REACT_APP_API_URL}discover/movie?api_key=`;
const API_KEY = process.env.REACT_APP_API_KEY;
const NUM_ITEMS_PER_PAGE = 3;

const TrailersFilms = () => {
  const [movieData] = useFetch(API_URL_ + API_KEY);
  const [numTrailersToShow, setNumTrailersToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstTrailers = movieData?.slice(0, numTrailersToShow) || [];
  const showMoreTrailers = () => {
    if (firstTrailers.length === movieData.length) {
      alert("Ya has cargado todas las películas");
    } else {
      setNumTrailersToShow(numTrailersToShow + NUM_ITEMS_PER_PAGE);
    }
  };
  return (
    <section className="trailers-section">
      <h1>Últimos avances</h1>
      <div className="trailers page__content">
        {firstTrailers.map((movie) => {
          return (
            <div key={movie.id}>
              <TrailerCard trailerId={movie.id}></TrailerCard>
              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
      <button onClick={showMoreTrailers} className="page__show-more btn">
        +MORE
      </button>
    </section>
  );
};
export default TrailersFilms;
