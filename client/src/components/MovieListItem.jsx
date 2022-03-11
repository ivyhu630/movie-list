import React from 'react';
import MovieDetail from './MovieDetail.jsx';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);

  }

  handleTitleClick(e) {
    this.props.onTitleClick(this.props.movie.title);
    var newState = !this.state.selected;
    // console.log('new state for ', this.props.movie.title, newState);
    this.setState({
      selected: newState
    });
  }

  render() {
    if (this.props.searchKeyAfterSubmit === '' || (!(this.props.searchKeyAfterSubmit === '') && this.props.movie.title.toLowerCase().includes(this.props.searchKeyAfterSubmit.toLowerCase()))) {

        return (
        <div className='movieLine' onClick={this.handleTitleClick}
        // onClick={() => this.props.onTitleClick(this.props.movie.title)}
        >
          <div>{this.props.movie.title}
            <div className='movieDetail'>
            <MovieDetail
              titleDetail={this.state.selected}
              movie={this.props.movie}/>
            </div>
            <div className='watchStatus'>{'watched'}</div>
          </div>
        </div>
        );
    } else{
        return null;

    }

  }
  //   if (this.props.searchKeyAfterSubmit === '' || (!(this.props.searchKeyAfterSubmit === '') && this.props.movie.title.toLowerCase().includes(this.props.searchKeyAfterSubmit.toLowerCase()))) {
  //     if (this.props.tabSelection === this.props.movie.watched && this.props.tabSelection === true) {
  //       return (
  //       <div className='movieLine' onClick={() => this.props.onTitleClick(this.props.movie.title)}>
  //         <div>{this.props.movie.title}
  //           <div className='movieDetail' onClick={this.handleTitleClick}>
  //           <MovieDetail
  //             titleDetail={this.state.selected}
  //             movie={this.props.movie}
  //           />

  //           </div>
  //           <div className='watchStatus'>{'watched'}</div>
  //         </div>
  //       </div>
  //       );
  //     }
  //     else if  (this.props.tabSelection === this.props.movie.watched && this.props.tabSelection === false) {
  //       return (
  //       <div className='movieLine' onClick={() => this.props.onTitleClick(this.props.movie.title)}>
  //         <div>{this.props.movie.title}</div>
  //       </div>
  //       );
  //     } else{
  //       return null;
  //     }
  //   } else {
  //     return null;
  //   }

  // }


}










export default MovieListItem;