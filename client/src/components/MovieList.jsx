import MovieListItem from './MovieListItem.jsx';
import React from 'react';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   movieInventory:

    // }
    // this.handleTitleClick = this.handleTitleClick.bind(this);
    }


    // handleTitleClick(title) {
    //   this.props.onTitleClick(title);
    // };

    render() {

      // console.log(this.props);
      if (this.props.searchKeyAfterSubmit === '') {
        // console.log(this.props.movies);
          return (

          <div className ='movies'>{this.props.movies.map((movie) =>
            <MovieListItem
              movie = {movie}
              onTitleClick={this.props.onTitleClick}
              tabSelection={this.props.tabSelection}
              />)}</div>
            );
        } else {
            return (
            <div>{this.props.searchedMovies.map((movie) =>
              <MovieListItem movie = {movie} />)
              }
            </div>
          );
        }
    }
}

export default MovieList;