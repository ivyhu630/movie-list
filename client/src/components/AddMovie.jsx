import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    // console.log("test");
    this.props.onMovieChange(event.target.value);
    }

  handleClick(event) {
    event.preventDefault();
    this.props.onAddMovie(event);
  }


  render() {
    return (
      <form className="search-bar form-inline" >
        <input
          className="form-control"
          type="text"
          placeholder="Add movie title here"
          value={this.props.movieAddition}
          onChange={this.handleChange}/>
        <button
          className="btn hidden-sm-down"
          onClick={this.handleClick}
          style={{background: 'green', color: 'white'}}
        >Add</button>
      </form>
    );
  }

}

export default AddMovie;

