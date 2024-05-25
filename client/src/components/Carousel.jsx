import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

class RenderCarousal extends Component {
  render() {
    return (
      <Carousel interval="3000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../photos/Carousal1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white" }}>Chào Mừng Đến Với Bếp Sinh Viên!</h1>
            <p>
            Đặt món ăn ngon tự chế biến từ các đầu bếp.
              Cuộn xuống để xem thực đơn ngày hôm nay.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../photos/Carousal2.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Giao hàng tận nhà!</h1>
            <p>Thưởng thức hương vị đặc biệt với thời gian giao hàng khoảng 15 phút.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default RenderCarousal;
