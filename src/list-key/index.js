import React, { Component } from "react";
import data from "./data.json";

export default class ListKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUser: [
        { username: "Nguyen", age: 18 },
        { username: "Truong", age: 19 },
        { username: "Duc", age: 20 },
        { username: "Quan", age: 21 },
      ],

      listMovie: data,
    };
  }

  renderListUser = () => {
    const { listUser } = this.state;
    return listUser.map((user, index) => {
      return (
        <li key={index}>
          {user.username} - {user.age}
        </li>
      );
    });
  };

  renderListMovie = () => {
    const { listMovie } = this.state;
    return listMovie.map((movie) => {
      return (
        <div key={movie.maPhim} className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={movie.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>ListKey</h1>
        <ul>
          {/* {this.state.listUser.map((user, index) => {
            return (
              <li key={index}>
                {user.username} - {user.age}
              </li>
            );
          })} */}

          {this.renderListUser()}
        </ul>

        <div className="container">
          <div className="row">{this.renderListMovie()}</div>
        </div>
      </div>
    );
  }
}
