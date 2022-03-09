import MovieListItem from './MovieListItem.jsx';
import React from 'react';


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    }

    render() {
      // console.log(this.props);
      if (this.props.searchKey === '') {
        // console.log(this.props.movies);
          return (
          <ul>{this.props.movies.map((movie) =>
            <MovieListItem movie = {movie}/>)}</ul>
            );
        } else {
          return (
            <ul>{this.props.searchedMovies.map((movie) =>
              <MovieListItem movie = {movie}/>)
              }
            </ul>
          );
        }
    }
}

export default MovieList;