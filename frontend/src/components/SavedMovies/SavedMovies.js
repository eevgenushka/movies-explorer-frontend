import React, { useState, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { filterMovies, filterDuration } from "../../utils/utils"
import SearchForm from "../SearchForm/SearchForm"

function SavedMovies({ loggedIn, savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [isShortMovies, setisShortMovies] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  function applySearchFilter(query) {
    setSearchQuery(query)
  }

  function toggleShortFilmFilter() {
    setisShortMovies(!isShortMovies)
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery)
    setFilteredMovies(
      isShortMovies ? filterDuration(moviesCardList) : moviesCardList
    )
  }, [savedMovies, isShortMovies, searchQuery])

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    }
  }, [filteredMovies])

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        applySearchFilter={applySearchFilter}
        onFilterMovies={toggleShortFilmFilter}
      />
      <MoviesCardList
        isNotFound={isNotFound}
        isSavedFilms={true}
        cards={filteredMovies}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  )
}

export default SavedMovies
