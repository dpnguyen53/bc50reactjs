import React, { Component } from "react";
import { connect } from "react-redux";

class UserItem extends Component {
  render() {
    const { user, getUserEdit, deleteUser } = this.props;

    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              getUserEdit(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //key là props cho component UserItem
    deleteUser: (id) => {
      const action = {
        type: "DELETE_USER",
        payload: id,
      };
      //dispatch gửi action lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
