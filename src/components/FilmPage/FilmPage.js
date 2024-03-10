import { useParams } from "react-router-dom";
import Header from "../Header/Header/Header";
import "./FilmPage.scss";
import useFetch from "../../hooks/useFetch";
import MovieMainInfo from "./MovieMainInfo/MovieMainInfo";
import MainCast from "./MainCast/MainCast";

const API_KEY = process.env.REACT_APP_API_KEY;
const FilmPage = () => {
  const { filmId } = useParams();
  const API_URL_DETAIL_FILM = `${process.env.REACT_APP_API_URL}movie/${filmId}?api_key=`;
  const [filmDetailData] = useFetch(API_URL_DETAIL_FILM + API_KEY);
  console.log(API_URL_DETAIL_FILM + API_KEY);
  console.log(filmDetailData, "datos");
  return (
    <div>
      <Header></Header>
      <MovieMainInfo movieData={filmDetailData}></MovieMainInfo>
      <MainCast credits={filmDetailData}></MainCast>
    </div>
  );
};
export default FilmPage;
