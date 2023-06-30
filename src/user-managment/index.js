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
      userEdit: null,
      keyword: "",
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

  /**
   * Submit(Add/Update) User
   */
  handleSubmitUser = (user) => {
    if (user.id) {
      //Update User
      const index = this._findIndex(user.id);

      if (index !== -1) {
        let listUserClone = [...this.state.listUser];
        listUserClone[index] = user;

        this.setState({
          listUser: listUserClone,
        });
      }
    } else {
      //Add User

      //Tạo giá trị cho id
      const userClone = { ...user, id: new Date().getTime() };

      let listUserClone = [...this.state.listUser, userClone];

      this.setState({
        listUser: listUserClone,
      });
    }
  };

  /**
   * Edit User
   */
  handleEditUser = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  };

  render() {
    let { listUser, userEdit, keyword } = this.state;
    //filter listUser
    listUser = listUser.filter(
      (user) =>
        user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          listUser={listUser}
          getUserDelete={this.handleDeleteUser}
          getUserEdit={this.handleEditUser}
        />
        <Modal getUserSubmit={this.handleSubmitUser} userEdit={userEdit} />
      </div>
    );
  }
}

export default Home;
