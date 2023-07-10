import React, { Component } from "react";
import Child from "./child";
import ChildPure from "./childPure";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor - chạy 1 lần");

    this.state = {
      number: 0,
    };

    this.interval = null;
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount - chạy 1 lần");
  }

  componentDidMount() {
    // gọi api
    console.log("componentDidMount - chạy 1 lần");
    this.interval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 1000);
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState.number === 2) {
      return false;
    }
    return true;
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - chạy khi component bị huỷ");
    clearInterval(this.interval);
  }

  render() {
    console.log("render - chạy nhiều lần - nếu state có sự thay đổi");
    return (
      <div>
        <h3>Lifecycle</h3>
        Number: {this.state.number}
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Click
        </button>
        <Child number={this.state.number} />
        <ChildPure />
      </div>
    );
  }
}
