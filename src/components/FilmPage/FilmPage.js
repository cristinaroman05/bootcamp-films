import { useParams } from "react-router-dom";
import Header from "../Header/Header/Header";
import "./FilmPage.scss";
import useFetch from "../../hooks/useFetch";

const API_KEY = process.env.REACT_APP_API_KEY;
const FilmPage = () => {
  const { filmId } = useParams();
  const API_URL_DETAIL_FILM = `${process.env.REACT_APP_API_URL}movie/${filmId}?api_key=`;
  const [filmDetailData] = useFetch(API_URL_DETAIL_FILM + API_KEY);
  console.log(API_URL_DETAIL_FILM + API_KEY);
  // useEffect(() => {
  //   fetch(API_URL_DETAIL_FILM + API_KEY)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setDetailFilmData(data);
  //       }
  //     });
  // }, [API_URL_DETAIL_FILM]);
  console.log(filmDetailData, "datos");
  return (
    <div>
      <Header></Header>
      <h1>FILM</h1>
      {filmDetailData && filmDetailData.map((film) => (
        <p key={film.id}>{film.original_title}</p>
      ))}
    </div>
  );
};
export default FilmPage;
