import React from 'react';
import MovieDetail from './MovieDetail.jsx';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleTitleSelection = this.handleTitleSelection.bind(this);
    this.turnOnTitle = this.turnOnTitle.bind(this);
    this.handleWatchStatus = this.handleWatchStatus.bind(this);
  }

  handleTitleSelection(e) {
    console.log('handle title')
    this.setState({
      selected: !this.state.selected
    });
  }

  turnOnTitle(e){
    this.setState({
      selected: true
    });
  }

  handleWatchStatus (e) {
    e.stopPropagation();
    this.props.changeWatchStatus(this.props.movie.title);
    this.props.onWatchChange(e);
  }

  render() {
    if (this.props.searchKeyAfterSubmit === '' || (!(this.props.searchKeyAfterSubmit === '') && this.props.movie.title.toLowerCase().includes(this.props.searchKeyAfterSubmit.toLowerCase()))) {
      if (this.props.tabSelection === this.props.movie.watched) {
        return (
        <div className='movieLine' onClick={this.handleTitleSelection}>{this.props.movie.title}
            <div className='movieDetail' >
            <MovieDetail
              titleDetail={this.state.selected}
              changeWatchStatus={this.props.changeWatchStatus}
              handleWatchStatus={this.handleWatchStatus}
              turnOnTitle={this.turnOnTitle}
              movie={this.props.movie}/>
            </div>
        </div>
        );
      } else {
        return null;
      }

    } else {
      return null;
    }
    // }

  }

  // }


}










export default MovieListItem;