import React from "react"
import "./MoviesCard.css"
import { durationConverter } from "../../utils/utils"

function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteCard,
  saved,
  savedMovies,
}) {

  function onMovieClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0])
    } else {
      handleLikeFilm(card)
    }
  }

  function onDeleteMovie() {
    onDeleteCard(card)
  }

  const cardLikeButtonClassName = `${
    saved ? "movie__like-button movie__like-button_active" : "movie__like-button"
  }`
  return (
    <>
      <li key={card.id} className="movie">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="movie__image"
            alt={card.nameRU}
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
          />
        </a>
        <div className="movie__container">
          <div className="movie__description">
            <h2 className="movie__title">{card.nameRU}</h2>
            <span className="movie__duration">
              {" "}
              {durationConverter(card.duration)}
            </span>
          </div>
          {isSavedFilms ? (
            <button
              type="button"
              className="movie__delete-button"
              onClick={onDeleteMovie}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={onMovieClick}
            ></button>
          )}
        </div>
      </li>
    </>
  )
}

export default MoviesCard