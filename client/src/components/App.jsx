import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Watch from './Watch.jsx';
import AddMovie from './AddMovie.jsx';
import movieData from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      searchKeyAfterSubmit:"",
      movies: movieData.movieData,
      movieAddition:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieAddition = this.handleMovieAddition.bind(this);
    this.handleMovieAdditionChange = this.handleMovieAdditionChange.bind(this);
    this.changeWatchStatus = this.changeWatchStatus.bind(this);
  }

  handleChange(key) {
    this.setState(
      {searchKey: key}
    );
  }

  handleSubmit(event) {
    var searchedMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchKey.toLowerCase()));
    if (searchedMovies.length === 0) {
      alert("no movie by that name found");
    } else {
      this.setState(
        {
        searchKeyAfterSubmit: this.state.searchKey
        }
      );
    }
  }

  handleMovieAddition(event) {
    // consider adding a check for duplicate
    console.log("added new movie: " + this.state.movieAddition);
    var newMovieData = movieData.movieData.push({title: this.state.movieAddition, watched: false});
    this.setState(
      {movie: newMovieData}
    );
  }

  handleMovieAdditionChange(title) {
    console
    this.setState(
      {movieAddition: title}
    );
  }

  changeWatchStatus(currentMovie) {
    // console.log("clicked " + currentMovie.title);
    for (const movie of this.state.movies) {
      if (currentMovie.title === movie.title) {
        movie.watched = !movie.watched;
        break;
      }
    }
    var newMovieData = movieData.movieData;
    this.setState(
      {movie: newMovieData})
  }

  render() {
    return (
      <div>MovieList
        <div>
          <AddMovie
            onAddMovie={this.handleMovieAddition}
            onMovieChange={this.handleMovieAdditionChange}
            movieAddition={this.state.movieAddition}
          />
        </div>
        <div>
          <Search
            onSearchChange={this.handleChange}
            onSubmit={this.handleSubmit}
            searchKey={this.state.searchKey}
          />
        </div>
        <div className='watch'>
          <Watch
              movies= {this.state.movies}
              searchKeyAfterSubmit= {this.state.searchKeyAfterSubmit}
              changeWatchStatus={this.changeWatchStatus}
            />
        </div>
      </div>
    );
  }
}

export default App;