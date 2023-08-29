import React from "react"
import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  )
}

export default Movies
