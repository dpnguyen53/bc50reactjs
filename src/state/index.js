import React, { Component } from "react";

export default class DemoState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Cybersoft",
      isLogin: false,
    };

    // console.log("constructor - chay 1 lan duy nhat");

    //bind handlLogin
    // this.handlLogin = this.handlLogin.bind(this);
  }

  handlLogin = () => {
    //Cập nhật giá trị cho isLogin
    this.setState({
      isLogin: true,
    });
  };

  handlLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderUI() {
    if (this.state.isLogin) {
      //da dang nhap
      return (
        <>
          <h3>Hi {this.state.username}</h3>
          <button className="btn btn-danger" onClick={this.handlLogout}>
            Logout
          </button>
        </>
      );
    } else {
      //chua dang nhap
      return (
        <button className="btn btn-success" onClick={this.handlLogin}>
          Login
        </button>
      );
    }
  }

  render() {
    // console.log("render");
    return (
      <div>
        <h1>DemoState</h1>
        {this.renderUI()}
      </div>
    );
  }
}
