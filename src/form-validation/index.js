import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },

      errors: {
        manv: "",
        tennv: "",
        email: "",
      },

      manvValid: false,
      tennvValid: false,
      emailValid: false,

      formValid: false,
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleValidation = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    let mess = value.trim() ? "" : `${name} k dc rong`;

    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        break;

      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        break;

      default:
        break;
    }

    //Cập nhật state.errors
    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
        formValid: manvValid && tennvValid && emailValid,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Ma NV</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleValidation}
            />
            {this.state.errors.manv && (
              <div className="text-danger">{this.state.errors.manv}</div>
            )}
          </div>
          <div className="form-group">
            <label>Ten NV</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleValidation}
            />
            {this.state.errors.tennv && (
              <div className="text-danger">{this.state.errors.tennv}</div>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleValidation}
            />
            {this.state.errors.email && (
              <div className="text-danger">{this.state.errors.email}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
