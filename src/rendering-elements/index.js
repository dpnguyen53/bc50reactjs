import React, { Component } from "react";

export default class RederingElement extends Component {
  constructor(props) {
    super(props);

    this.username = "Nguyen";
    this.age = 18;
  }

  showInfo() {
    return (
      <div>
        <p>
          Hello {this.username} - Age: {this.age}
        </p>
        <p>Hom nay ngay 19</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>RederingElement</h1>
        {/* <p>
          Hello {this.username} - Age: {this.age}
        </p> */}
        {this.showInfo()}
      </div>
    );
  }
}
