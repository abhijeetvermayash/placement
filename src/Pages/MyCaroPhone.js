import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";

import "./mycaro.css";

class MyCaroPhone extends Component {
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
export default MyCaroPhone;
