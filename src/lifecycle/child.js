import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameChild: "Cybersoft",
      numberChild: 3,
    };
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps", nextProps);
  //     if (nextProps && nextProps.number === this.state.numberChild) {
  //       this.setState({
  //         usernameChild: "Nguyen",
  //       });
  //     }
  //   }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps.number === currentState.numberChild) {
      //cập nhật state
      return {
        usernameChild: "Nguyen",
      };
    }
    return null;
  }

  render() {
    console.log("render - CHILD");
    return (
      <div>
        <h3>Child</h3>
        <h5>Username Child: {this.state.usernameChild}</h5>
        <h5>Number Child: {this.state.numberChild}</h5>
      </div>
    );
  }
}
