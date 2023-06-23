import React, { Component } from "react";

export default class Child extends Component {
  handleResetUsername = () => {
    const username = "Nguyen";
    this.props.resetUsername(username);
  };

  render() {
    return (
      <div>
        <h3>Child</h3>
        <p>Username: {this.props.username}</p>
        <button className="btn btn-danger" onClick={this.handleResetUsername}>
          Reset Username
        </button>
      </div>
    );
  }
}
