import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";

export default class Communicate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
    };
  }

  handleChangeUsername = () => {
    this.setState({
      username: "Cybersoft",
    });
  };

  handleResetUser = (username) => {
    // Nhận username từ component con (Child)
    this.setState({
      username,
    });
  };

  render() {
    return (
      <div>
        <h1>Communicate</h1>
        <p>Username: {this.state.username}</p>
        <button className="btn btn-success" onClick={this.handleChangeUsername}>
          Change Username
        </button>
        {/* Child Component */}
        <Child
          username={this.state.username}
          resetUsername={this.handleResetUser}
        />

        {/* ChildFnc Component */}
        <ChildFnc username={this.state.username} />
      </div>
    );
  }
}
