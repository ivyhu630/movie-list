import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  handleSubmit(event) {
    console.log("you submitted");
    event.preventDefault();
    this.props.onSubmit(event);

  }

  render() {
    return (
      <form className="search-bar form-inline" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.searchKey}
          onChange={this.handleChange}/>
        <input
          className="btn hidden-sm-down"
          type="submit"
          value="Go!"/>
      </form>
    );
  }
}

export default Search;

