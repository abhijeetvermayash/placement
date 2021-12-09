import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/d4.jpg";
import image2 from "../images/d5.jpg";
import image3 from "../images/d6.jpg";
import image4 from "../images/d6.jpg";
import image5 from "../images/d7.jpg";
import image6 from "../images/d8.jpg";
import "./myphone.css";

class MovePhone extends Component {
  render() {
    return (
      <div className="Caro">
        <Carousel
          infiniteLoop
          autoPlay
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={30}
          swipeable={false}
          stopOnHover={false}
        >
          <div className="image">
            <img src={image1} />
          </div>
          <div className="image">
            <img src={image2} />
          </div>
          <div className="image">
            <img src={image3} />
          </div>
          {/* <div className="image">
            <img src={image4} />
          </div>
          <div className="image">
            <img src={image5} />
          </div>
          <div className="image">
            <img src={image6} />
          </div> */}
        </Carousel>
      </div>
    );
  }
}
export default MovePhone;
