import { React, useEffect, useState } from "react";
import Header from "../Header/Header/Header";
import "./FilmsPage.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const API_URL_DAY = `${process.env.REACT_APP_API_URL}trending/movie/day?api_key=`;
const API_URL_WEEK = `${process.env.REACT_APP_API_URL}trending/movie/week?api_key=`;
const API_KEY = process.env.REACT_APP_API_KEY;
const NUM_ITEMS_PER_PAGE = 5;

const FilmsPage = () => {
  const [filmsDataDaily] = useFetch(API_URL_DAY + API_KEY);
  const [filmsDataWeekly] = useFetch(API_URL_WEEK + API_KEY);
  const [filmsData, setFilmsData] = useState(filmsDataDaily);
  const [numFilmsToShow, setNumFilmsToShow] = useState(NUM_ITEMS_PER_PAGE);
  useEffect(() => {
    fetch(API_URL_DAY + API_KEY)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data.results);
      });
  }, []);
  const firstFilms = filmsData?.slice(0, numFilmsToShow) || [];
  const showMoreFilms = () => {
    if (firstFilms.length === filmsDataDaily.length) {
      alert("Ya has cargado todas las películas");
    } else {
      setNumFilmsToShow(numFilmsToShow + NUM_ITEMS_PER_PAGE);
    }
  };
  const handleClick = (trend) => {
    if (trend === "daily") {
      setFilmsData(filmsDataDaily);
    }
    if (trend === "weekly") {
      setFilmsData(filmsDataWeekly);
    }
  };

  console.log(firstFilms);
  return (
    <div className="films-page page">
      <Header></Header>
      <section className="films-page__section">
        <div>
          <h1>Bienvenidos</h1>
          <p>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</p>
        </div>
      </section>
      <h1>Tendencias</h1>
      <div className="btn__container">
        <button onClick={() => handleClick("daily")} className="btn">
          Hoy
        </button>
        <button onClick={() => handleClick("weekly")} className="btn btn--reverse">
          Esta semana
        </button>
      </div>
      <div className="films page__content">
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
    </div>
  );
};
export default FilmsPage;
