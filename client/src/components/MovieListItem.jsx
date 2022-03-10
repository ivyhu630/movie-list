import React from 'react';

const MovieListItem = ({movie,onTitleClick, tabSelection, searchKeyAfterSubmit}) => {

  if (searchKeyAfterSubmit === '' || (!(searchKeyAfterSubmit === '') && movie.title.toLowerCase().includes(searchKeyAfterSubmit.toLowerCase()))) {
    // console.log("current search is "+ searchKeyAfterSubmit);
    if (tabSelection === movie.watched && tabSelection === true) {
      return (
      <div className='movieLine' onClick={() => onTitleClick(movie.title)}>
        <div>{movie.title}</div>
        <div className='watchStatus'>{'watched'}</div>
      </div>
      );
    }
    else if  (tabSelection === movie.watched && tabSelection === false) {
      return (
      <div className='movieLine' onClick={() => onTitleClick(movie.title)}>
        <div>{movie.title}</div>
      </div>
      );
    } else{
      return(
        <div></div>
      )
    }
  } else {

    return(
      <div></div>
    )
  }


}




export default MovieListItem;