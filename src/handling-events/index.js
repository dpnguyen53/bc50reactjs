import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlClick() {
    console.log(123);
  }

  handlClickParams(user, age) {
    console.log(user, age);
  }

  render() {
    return (
      <div>
        <h1>HandlingEvents</h1>
        <button className="btn btn-success" onClick={this.handlClick}>
          Click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlClickParams("Nguyen", 18);
          }}
        >
          Click Params
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            console.log("Click Custom");
          }}
        >
          Click Custom
        </button>
      </div>
    );
  }
}
