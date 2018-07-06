import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';


class FilmRow extends Component {

  handleDetailsClick(film) {
    console.log("Fetching details for " + film);  
  }

  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)} >
      <FilmPoster film={this.props.film}/>
        <div className="film-summary">
          <h2>{this.props.film.title}</h2>
          <p>{year}</p>
        </div>
        <Fave/>
      </div>
    )
  }
}

export default FilmRow