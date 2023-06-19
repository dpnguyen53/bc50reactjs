import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: "./images/imgRedCar.jpg",
    };
  }

  handlChangeUrlImg = (urlImg) => {
    this.setState({
      urlImg,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Car</h1>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.urlImg} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => this.handlChangeUrlImg("./images/imgRedCar.jpg")}
            >
              Red
            </button>
            <button
              className="btn btn-dark mx-3"
              onClick={() => this.handlChangeUrlImg("./images/imgBlackCar.jpg")}
            >
              Black
            </button>
            <button
              className="btn btn-light"
              onClick={() =>
                this.handlChangeUrlImg("./images/imgSilverCar.jpg")
              }
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
