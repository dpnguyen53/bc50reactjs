import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
      listCart: [],
    };
  }

  handleDetailProduct = (product) => {
    //nhận product từ DSSP <= SP
    this.setState({
      productDetail: product,
    });
  };

  _findIndex = (maSP) =>
    this.state.listCart.findIndex((product) => product.maSP === maSP);

  handleAddCart = (product) => {
    const index = this._findIndex(product.maSP);

    //tạo mảng listCart mới từ this.state.listCart
    let listCart = [...this.state.listCart];

    if (index !== -1) {
      //tim thay => Cap nhat SL
      listCart[index].soLuong += 1;
    } else {
      //add to listCart
      const productAddCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        giaBan: product.giaBan,
      };

      listCart.push(productAddCart);
    }

    //Cập nhật lại state
    this.setState({
      listCart,
    });
  };

  handleUpdateQuantity = (maSP, isPlus) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(maSP);

    if (index !== -1) {
      if (isPlus) {
        //tang SL
        listCartClone[index].soLuong += 1;
      } else {
        // giam SL
        if (listCartClone[index].soLuong > 1) {
          listCartClone[index].soLuong -= 1;
        }
      }

      //cap nhat lai state
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  handleDeleteProduct = (maSP) => {
    //clone mảng listCart
    let listCartClone = [...this.state.listCart];

    //tim vi tri
    const index = this._findIndex(maSP);

    if (index !== -1) {
      //xoa
      listCartClone.splice(index, 1);
      //cap nhat state
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  totalQuantity = () => {
    return this.state.listCart.reduce(
      (total, product) => (total += product.soLuong),
      0
    );
  };

  render() {
    const { productDetail, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.listProduct}
          getDetailProduct={this.handleDetailProduct}
          getProductAddCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          getProductUpdate={this.handleUpdateQuantity}
          getDelProduct={this.handleDeleteProduct}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
