import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <img src="../../../assets/images/logo-header.svg"></img>
      <div className="header__nav">
        <NavLink to="/">Películas</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
    </header>
  );
};
export default Header;
