import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/account-btn.svg";
import menu from "../../images/menu-button.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const location = useLocation();

  const viewSecondHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  const  viewFirstHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {viewFirstHeader() && (
        <header className="header" id="header">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      )}

      {viewSecondHeader() && (
        <header className="header header_gray" id="header-gray">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-container-films">
            <NavLink
              to="/movies"
              className="header__button"
              activeclassname="header__button_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__button"
              activeclassname="header__button_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link to="/profile" className="header__account-button">
              <img
                className="header__account-image"
                src={account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="Кнопка меню" />
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
