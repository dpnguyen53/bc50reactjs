import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct, getDetailProduct } = this.props;

    return listProduct.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={getDetailProduct}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
