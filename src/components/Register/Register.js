import "../Form/Form.css"
import Form from "../Form/Form"
import React from "react"

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="Ваше имя" 
        />
        <span className="form__input-error">Заполните поле "Имя".</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="Ваш Email" 
        />
        <span className="form__input-error">Адрес электронной почты должен содержать символ "@".</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          placeholder="Ваш пароль" 
        />
        <span className="form__input-error">Заполните поле "Пароль".</span>
      </label>
    </Form>
  )
}

export default Register
