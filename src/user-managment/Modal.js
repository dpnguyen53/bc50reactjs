import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    //lưu những value khi user nhập vào các thẻ input
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };

    //closeModal DOM tới thẻ cần
    this.closeModal = React.createRef();
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    //Ngăn việc load lại trang web khi click button "Submit"
    event.preventDefault();

    //truyền this.state ra ngoài Home(index)
    this.props.getUserSubmit(this.state);

    //close modal
    this.closeModal.current.click();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * LifeCycle
     * - K chạy/thực lần đầu
     * - Chạy/thực thi khi mà nhận props mới
     */
    if (nextProps && nextProps.userEdit) {
      //Cập nhật lại state
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      // reset state
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  render() {
    console.log(this.props.userEdit);

    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnchange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnchange}
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnchange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnchange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnchange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
