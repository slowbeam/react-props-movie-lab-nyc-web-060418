import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movieObj) => <MovieCard title={movieObj.title} IMDBRating={movieObj.IMDBRating} genres={movieObj.genres} poster={movieObj.poster} /> )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
