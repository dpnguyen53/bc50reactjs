import React, { Component } from "react";

class Search extends Component {
  handleOnchange = (e) => {
    this.props.getKeyword(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

export default Search;
