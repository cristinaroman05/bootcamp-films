import { useEffect, useState } from "react";
import Header from "../../components/Header/Header/Header";
import "../QuizPage/QuizPage.scss";
import { generateRandom } from "../../utilities/utilities";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_QUIZ = `${process.env.REACT_APP_API_URL}movie/top_rated?api_key=${API_KEY}`;

const QuizPage = () => {
  // Estados
  const [filmSelected, setFilmSelected] = useState();
  const [quizIsSolved, setQuizIsSolved] = useState(false);
  const [filmsList, setFilmsList] = useState([]);
  const [options, setOptions] = useState([]);

  // Pelicula actual
  const [currentFilm, setCurrentFilm] = useState();

  useEffect(() => {
    fetch(API_URL_QUIZ)
      .then((response) => response.json())
      .then((data) => {
        setFilmsList(data.results);
        console.log(data);
        generateNewGamePlay(data.results);
      });
  }, []);

  const generateNewGamePlay = (movies) => {
    const randomIndexes = Array.from({ length: 4 }, () => generateRandom(0, 19));
    console.log(randomIndexes);
    // Elegimos pelicula actual
    const currentFilmIndex = generateRandom(0, 20);
    const currentFilmFromList = movies[currentFilmIndex];
    setCurrentFilm(currentFilmFromList);
    // Lista de opciones de pelicula
    const newGameOptions = randomIndexes.map((index) => movies[index].title);
    setOptions(newGameOptions);
    // Reset de juego
    setQuizIsSolved(false);
    setFilmSelected(null);
  };
  const selectOption = (title) => {
    if (!quizIsSolved) {
      setFilmSelected(title);
    }
  };
  console.log(filmSelected)
  // const getClassesForButton = (option) => {
  //   if (quizIsSolved) {
  //     if (option === option.title) {
  //       return "btn--option-correct";
  //     } else if (option === filmSelected) {
  //       return "btn--option-wrong";
  //     }
  //   } else {
  //     if (option === filmSelected) {
  //       return "btn--option-selected";
  //     }
  //   }
  // };
  return (
    <div>
      <Header></Header>
      <h1>QUIZ</h1>
      <img className="card__img" alt={currentFilm?.title} src={`${"http://image.tmdb.org/t/p/original"}${currentFilm?.poster_path}`}></img>
      <div>
        <p>{currentFilm?.original_title}</p>
        <h2>Sinopsis</h2>
        <p>{currentFilm?.overview}</p>
      </div>
      <div>
        <h2>Opciones</h2>
        {options.map((option, index) => (
          <button onClick={() => selectOption(option)} key={index}>{option} </button>
        ))}
      </div>
      <div>
        <button onClick={() => generateNewGamePlay(filmsList)}>REINICIAR</button>
        <button onClick={() => setQuizIsSolved(true)}>RESOLVER</button>
      </div>
    </div>
  );
};
export default QuizPage;
