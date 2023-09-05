import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader"
import SearchError from "../SearchError/SearchError"
import "./MoviesCardList.css"

import {
  NUMBER_OF_MOVIES_DESKTOP,
  TABLET_ITEMS_PER_PAGE,
  MOBILE_ITEMS_PER_PAGE,
  MAX_SIZE_PAGE,
  MIDDLE_SIZE_PAGE,
} from "../../utils/constants"

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  handleLikeFilm,
  onDeleteCard,
}) {

  const [shownMovies, setShownMovies] = useState(0)
  const { pathname } = useLocation()

  function calculateMoviesDisplay() {
    const display = window.innerWidth
    if (display > MAX_SIZE_PAGE) {
      setShownMovies(12)
    } else if (display > MIDDLE_SIZE_PAGE) {
      setShownMovies(8)
    } else {
      setShownMovies(5)
    }
  }

  function increaseShowMoviesCount() {
    const display = window.innerWidth
    if (display > MAX_SIZE_PAGE) {
      setShownMovies(shownMovies + NUMBER_OF_MOVIES_DESKTOP)
    } else if (display > MIDDLE_SIZE_PAGE) {
      setShownMovies(shownMovies + TABLET_ITEMS_PER_PAGE)
    } else {
      setShownMovies(shownMovies + MOBILE_ITEMS_PER_PAGE)
    }
  }

  function findSavedMovieInList(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
  }

  useEffect(() => { 
    calculateMoviesDisplay(); 
  }, [cards]);

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", calculateMoviesDisplay);
      }, 500);
      return () => {
        window.removeEventListener('resize', calculateMoviesDisplay);
      }
  });

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"Ничего не найдено"} />
      )}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            "Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="movies__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={findSavedMovieInList(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="movies__button-container"></div>
            </>
          ) : (
            <>
              <ul className="movies__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={findSavedMovieInList(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="movies__button-container">
                {cards.length > shownMovies ? (
                  <button
                    className="movies__button"
                    onClick={increaseShowMoviesCount}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default MoviesCardList