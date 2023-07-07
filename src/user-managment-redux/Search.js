import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyword } from "./../store/actions";

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

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
