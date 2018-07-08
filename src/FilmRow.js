import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';


const FilmRow = function(props) {
  const year = new Date(props.film.release_date).getFullYear();
  return (
    <div className="film-row" onClick={props.onDetailsClick} >
    <FilmPoster film={props.film}/>
      <div className="film-summary">
        <h2>{props.film.title}</h2>
        <p>{year}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  )
}

export default FilmRow