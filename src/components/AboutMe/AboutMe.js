import photo from "../../images/IMG_6312.jpeg"
import "./AboutMe.css"
import React from "react"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description">
          <h3 className="about-me__name">Евгения</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я живу в Самаре и работаю в Райффайзенбанке. Именно работа в банке сподвигла меня на смену деятельности, так как у нас сильные IT специалисты. Обожаю путешествовать и изучаю английский язык.
          </p>
          <a
            href="https://github.com/eevgenushka"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Моя фотография" className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe
