import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleConfirm = () => {
    // Perform any action upon confirmation here
    // For now, let's just show a confirmation message and redirect to the home page
    alert("Xác nhận thành công!");
    this.props.history.push("/"); // Assuming "/" is your home page route
    window.location.reload(); // Reload the page
  };
  
  

  // handleConfirm = () => {
  //   // Perform any action upon confirmation here
  //   // For now, let's just show a confirmation message and reload the page
  //   alert("Xác nhận thành công!");
  //   window.location.reload();
  // };
  
  render() {
    return (
      <main className="page">
        <section className="payment-form dark">
          <div className="container">
            <div className="block-heading">
              <br />
              <br />

              <h2>Chi tiết thanh toán</h2>
              <hr />
            </div>

            <form>
              <div className="products">
                <h3 className="title">Thanh Toán</h3>
                <ul className="list-group mb-3">
                  {this.props.shoppingCartFoodItems.map((foodItem) => (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={foodItem.name}
                    >
                      <div>
                        <span>
                          <img
                            alt="Shopping Cart"
                            src={require("../photos/" + foodItem.name + ".jpg")}
                            width="40"
                            height="40"
                            className="d-inline-block align-top m-2"
                            style={{ borderRadius: "7px", float: "left" }}
                          />
                        </span>
                        <span className="m-2" style={{ float: "left" }}>
                          <h6 className="my-0">
                            {foodItem.name}{" "}
                            <span className="badge badge-success badge-pill">
                              {foodItem.counter}
                            </span>
                          </h6>
                          <small className="text-success">
                            Giá: {foodItem.price}
                          </small>
                        </span>
                      </div>
                      <span className="text-muted">
                        Tổng tiền: {foodItem.price * foodItem.counter} VNĐ
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="total">
                  Tổng tiền:{" "}
                  <span className="price">{this.props.billAmount} VNĐ</span>
                </div>
              </div>

              <div className="card-details">
                <div className="row">
                  <div className="form-group col-sm-12">
                    <Button
                      type="button"
                      className="btn btn-outline-success btn-block"
                      onClick={this.handleShow}
                    >
                      Tiến hành đặt hàng {this.props.billAmount}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>QR Code Thanh Toán</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../photos/qr-code.jpg")}
                alt="QR Code"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <p>Lưu ý: Nhập đúng nội dung chuyển khoản: Số lượng + Sản phẩm + Địa chỉ + Số điện thoại </p>
              <p>Ví dụ: 2 trachanh tuancuong 0123456789 </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
  <Button variant="secondary" onClick={this.handleClose}>
    Đóng
  </Button>
  <Button variant="primary" onClick={this.handleConfirm}>
    Xác nhận
  </Button>
</Modal.Footer>

        </Modal>

        <footer>
          <p>Home Cook © 2020 All Rights Reserved</p>
          <p>Shahzaib Ayyub | 17I-0251</p>
        </footer>
      </main>
    );
  }
}

export default withRouter(Payment);
