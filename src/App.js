import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film) {
    console.log("toggling fave")
    const faves = Array.from(this.state.faves)
    const filmIndex =  faves.indexOf(film)
    if (filmIndex > -1) {
      // it has been found in faves, so remove it with splice
      faves.splice(filmIndex, 1)
    } else {
      // it has not been found in faves
      faves.push(film)
    }
    this.setState({
      faves
    })
  }

  handleDetailsClick(film) {
    console.log("Fetching details for " , film);
    this.setState({
      current: film
    })
  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing  onFaveToggle={this.handleFaveToggle} 
                        films={this.state.films} 
                        faves={this.state.faves}
                        onDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails film={this.state.current}/>
        </div>
      </div>
    );
  }
}

export default App;
