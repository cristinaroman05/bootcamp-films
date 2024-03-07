import FilmsPageTrend from "../../components/FilmsPage/FilmsPageTrend";
import PopularFilms from "../../components/FilmsPage/PopularFilms";
import TrailersFilms from "../../components/FilmsPage/TrailersFilms";
const Home = () => {
  return (
    <div>
      <FilmsPageTrend></FilmsPageTrend>
      <TrailersFilms></TrailersFilms>
      <PopularFilms></PopularFilms>
    </div>
  );
};
export default Home;
