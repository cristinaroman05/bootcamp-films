import { React, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const API_URL_MOVIE = `${process.env.REACT_APP_API_URL}movie/popular?api_key=`;
const API_URL_TV = `${process.env.REACT_APP_API_URL}tv/popular?api_key=`;
const API_KEY = process.env.REACT_APP_API_KEY;
const NUM_ITEMS_PER_PAGE = 5;

const PopularFilms = () => {
  const [DataMovie] = useFetch(API_URL_MOVIE + API_KEY);
  const [DataTv] = useFetch(API_URL_TV + API_KEY);
  const [filmsData, setFilmsData] = useState(DataMovie);
  const [numFilmsToShow, setNumFilmsToShow] = useState(NUM_ITEMS_PER_PAGE);
  useEffect(() => {
    fetch(API_URL_MOVIE + API_KEY)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data.results);
      });
  }, []);
  const firstFilms = filmsData?.slice(0, numFilmsToShow) || [];
  const showMoreFilms = () => {
    if (firstFilms.length === DataMovie.length) {
      alert("Ya has cargado todas las películas");
    } else {
      setNumFilmsToShow(numFilmsToShow + NUM_ITEMS_PER_PAGE);
    }
  };
  const handleClick = (trend) => {
    if (trend === "Movie") {
      setFilmsData(DataMovie);
    }
    if (trend === "TV") {
      setFilmsData(DataTv);
    }
  };
  return (
    <div className="films-page page">
      <h1>Lo más popular</h1>
      <div className="btn__container">
        <button onClick={() => handleClick("Movie")} className="btn">
          Películas
        </button>
        <button onClick={() => handleClick("TV")} className="btn btn--reverse">
          Televisión
        </button>
      </div>
      <div className=" films page__content">
        {firstFilms?.map((film) => (
          <Link to={`/film/${film.id}`} key={film.id}>
            <div className="card">
              <img className="card__img" alt={film.title} src={`${"https://image.tmdb.org/t/p/original"}${film.poster_path}`}></img>
              <div>
                <p>{film.vote_average}</p>
              </div>
              <h2 className="card__title">{film.title}</h2>
              <p>{film.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={showMoreFilms} className="page__show-more btn">
        +MORE
      </button>
      <section className="films-page__section2">
        <div>
          <h1>Únete hoy.</h1>
          <p>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Disney Plus, fuboTV y Apple TV Plus.</p>
        </div>
      </section>
    </div>
  );
};
export default PopularFilms;
