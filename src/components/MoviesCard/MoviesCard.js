import React from "react";

import "./MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <li className="movie">
        <img alt="" className="movie__image" />
        <div className="movie__container">
          <div className="movie__description">
            <h2 className="movie__title">В погоне за Бенкси</h2>
            <span className="movie__duration">1ч 42м</span>
          </div>
          <button type="button" className="movie__like-button movie__like-button_active"></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
