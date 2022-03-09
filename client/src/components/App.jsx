import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchedMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    this.setState(
      {searchKey: key}
    );
  }

  handleSubmit(event) {
    this.setStategir(
      {searchedMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchKey.toLowerCase()))}
    );
  }


  render() {
    return (
      <div>MovieList
        <div>
          <Search
            onSearchChange={this.handleChange}
            onClick={this.handleSubmit}
            searchKey={this.state.searchKey}

          />
        </div>
        <div>
          <ul><MovieList
                movies= {this.state.movies}
                searchedMovies={this.state.searchedMovies}
                searchKey= {this.state.searchKey}
                onClick={this.handleSubmit}
              />
          </ul>
        </div>
      </div>
    );
  }
}


export default App;