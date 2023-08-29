import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

function Form({ linkText, link, children, title, buttonText, question }) {
  return (
    <section className="form">
        <Link to="/" className="logo">
          <img src={logo} alt="Логотип приложения" />
        </Link>
        <h3 className="form__title">{title}</h3>
        <form className="forma" id="form" noValidate>
          {children}
          <button type="submit" className="form__button-save">
            {buttonText}
          </button>
        </form>
        <p className="form__text">
          {question}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
    </section>
  );
}

export default Form;
