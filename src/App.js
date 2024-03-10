import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import FilmPage from "./components/FilmPage/FilmPage";
import QuizPage from "./components/QuizPage/QuizPage";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>FILMS</Route>
          <Route path="/film/:filmId" element={<FilmPage></FilmPage>}>FILM</Route>
          <Route path="/quiz" element={<QuizPage></QuizPage>}>QUIZ</Route>
        </Routes>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
