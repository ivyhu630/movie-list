import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value)
  }

  handleSubmit(event) {
    this.props.onClick(event);
    event.preventDefault();
    console.log("you clicked submit");
  }


  render() {
    return (
      <form className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.searchKey}
          onChange={this.handleChange}
        />
        <button className="btn hidden-sm-down" onClick={this.handleSubmit}>
          <span className="glyphicon glyphicon-search">Go!</span>
        </button>
      </form>
    );
  }
}

export default Search;

