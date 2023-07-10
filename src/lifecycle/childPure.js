import React, { PureComponent } from "react";

export default class ChildPure extends PureComponent {
  render() {
    console.log("Render - ChildPure");
    return (
      <div>
        <h3>ChildPure</h3>
      </div>
    );
  }
}
