import FilmsPageTrend from "../FilmsPage/FilmsPageTrend";
import PopularFilms from "../FilmsPage/PopularFilms";
import TrailersFilms from "../FilmsPage/TrailersFilms";
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
