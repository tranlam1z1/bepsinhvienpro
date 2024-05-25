// File path: ./src/components/FoodItems.jsx

import React, { Component } from "react";
import moment from "moment";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer"; // Ensure the path is correct

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

class FoodItems extends Component {
  render() {
    return (
      <div className="container col-md-10">
        <div className="py-4 text-center">
          <h2 style={{ color: "white" }}>
            Thực đơn ({moment().format("dddd")})
          </h2>
          <h3>-- Thực đơn thay đổi theo ngày --</h3>
          <p style={{ color: "white" }}>
          Đổ đầy giỏ hàng của bạn với các món ngon của chúng tôi!
          </p>
        </div>
        <CardColumns>
          {this.props.foodItems.map((foodItem) => (
            <Card border="dark" bg="dark" text="white" key={foodItem.name}>
              <Card.Img
                variant="top"
                src={require("../photos/" + foodItem.name + ".jpg")}
              />
              <Card.Body>
                <h3>
                  {foodItem.name} {this.props.renderCounter(foodItem)}
                </h3>
                <Card.Text>{foodItem.description}</Card.Text>
                <h5>Giá: {foodItem.price} VNĐ</h5>
                <Button
                  className="m-2"
                  variant="outline-success"
                  onClick={() =>
                    this.props.addCounter(foodItem, this.props.billAmount)
                  }
                >
                  Đặt Hàng
                </Button>
                {this.props.renderCloseButtonOnCart(foodItem)}
              </Card.Body>
              <Card.Footer>
                <small>Thời gian giao hàng: Khoảng 15 phút</small>
                <br />
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          ssr
          infinite
          autoPlay={this.props.deviceType !== "mobile"}
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {["Mì trộn Idomie", "Mì tương đen", "Trà chanh", "Trà thái"].map(
            (item) => (
              <div key={item} className="carousel-image-container">
                <img
                  src={require(`../photos/${item}.jpg`)}
                  alt={item}
                  className="d-block w-100 carousel-image"
                />
              </div>
            )
          )}
        </Carousel>
        <Footer /> {/* Include the Footer component */}
      </div>
    );
  }
}

export default FoodItems;


