import React, {Component} from "react";
import FilmRow from './FilmRow';

class FilmListing extends Component {

  constructor(props) {
    super(props)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick(filter) {
    console.log("Setting filter to " + filter);
    this.setState( {
      filter: filter 
    })
  }

  render() {
    const safeArray = Array.from(this.props.films);
    const allFilms = safeArray.map((film) => <FilmRow film={film} key={film.id}/> );
    const allFilter = this.state.filter === 'all' ? 'is-active' : ''
    const favesFilter = this.state.filter === 'faves' ? 'is-active' : ''

    return(
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={"film-list-filter " + allFilter} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={"film-list-filter " + favesFilter} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  } 
}

export default FilmListing