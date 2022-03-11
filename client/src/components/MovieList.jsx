import MovieListItem from './MovieListItem.jsx';
import React from 'react';


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    }




    render() {
      // console.log("in MovieList " + this.props.searchKeyAfterSubmit)
      return (

      <div className ='movies'>{this.props.movies.map((movie) =>
        <MovieListItem
          movie = {movie}
          onTitleClick={this.props.onTitleClick}
          tabSelection={this.props.tabSelection}
          searchKeyAfterSubmit={this.props.searchKeyAfterSubmit}
          />)}</div>
        );

    }
}

export default MovieList;