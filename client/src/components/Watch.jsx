import MovieList from './MovieList.jsx';
import React from 'react';


class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      watched: true
    }

    this.toggleWatchedOff = this.toggleWatchedOff.bind(this);
    this.toggleWatchedOn = this.toggleWatchedOn.bind(this);
    this.onWatchChange = this.onWatchChange.bind(this);
    }


    toggleWatchedOn(event) {
      console.log("clicked watch");
      this.setState(
        {watched:true}
      )
    };

    toggleWatchedOff(event) {
      // console.log("clicked watch");
      this.setState(
        {watched: false}
      )
    };

    onWatchChange(event) {
      console.log('watch tab on' + this.state.watched);

      this.setState(
        {watched: !this.state.watched}
      )
    }


    render() {
      return(
        <div>
          <div className='watchTabLine'>
            <div onClick={this.toggleWatchedOn}
                className={this.state.watched? 'watchedTab turnGreenTab' : 'watchedTab deactivateTab'}>
              Watched
            </div>
            <div onClick={this.toggleWatchedOff}
            className={this.state.watched? 'toWatchTab deactivateTab' : 'toWatchTab turnGreenTab'}
            >To Watch</div>
          </div>
          <div className='movieList'>
            <MovieList
              movies= {this.props.movies}
              searchedMovies={this.props.searchedMovies}
              searchKeyAfterSubmit= {this.props.searchKeyAfterSubmit}
              changeWatchStatus={this.props.changeWatchStatus}
              tabSelection={this.state.watched}
              onWatchChange={this.onWatchChange}
              />
          </div>
        </div>
      );

    }
}

export default Watch;