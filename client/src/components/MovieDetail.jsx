import React from 'react';

const MovieDetail = ({movie,titleDetail}) => {
  // console.log(movie.title + 'show detail ' + titleDetail);
  if(titleDetail) {

    return (
      <div className='movieDetail'>
        <div>Year: 1995</div>
        <div>Runtime: 107</div>
        <div>Metascore: 46</div>
        <div>ImdbRating: 6.2</div>
      </div>
    );
  } else {
    return null;
  }


}




export default MovieDetail;