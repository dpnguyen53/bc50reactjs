import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListUser = () => {
    const { listUser, getUserDelete } = this.props;
    return listUser.map((user) => {
      return (
        <UserItem key={user.id} user={user} getUserDelete={getUserDelete} />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderListUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
