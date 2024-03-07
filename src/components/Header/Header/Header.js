import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import logo from "../../../assets/images/logo-header.svg"
const Header = () => {
  return (
    <header className="header">
      <img src={logo}></img>
      <div className="header__nav">
        <NavLink to="/">Películas</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
    </header>
  );
};
export default Header;
