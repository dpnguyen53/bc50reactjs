import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
    };
  }

  _findIndex = (id) => this.state.listUser.findIndex((user) => user.id === id);

  /**
   * Delete User
   */
  handleDeleteUser = (id) => {
    //clone mảng listUser từ state
    let listUserClone = [...this.state.listUser];

    //Tìm vị trí id
    const index = this._findIndex(id);

    if (index !== -1) {
      //xoa user
      listUserClone.splice(index, 1);
      //cap nhat state
      this.setState({
        listUser: listUserClone,
      });
    }
  };

  render() {
    const { listUser } = this.state;

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users listUser={listUser} getUserDelete={this.handleDeleteUser} />
        <Modal />
      </div>
    );
  }
}

export default Home;
