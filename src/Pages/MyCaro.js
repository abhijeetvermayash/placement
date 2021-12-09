import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/img1.jpeg";
import image2 from "../images/img2.jpeg";
import image3 from "../images/img3.jpeg";
import image4 from "../images/img4.jpeg";
import image5 from "../images/img5.jpeg";
import image6 from "../images/img6.jpeg";

import "./mycaro.css";

class MyCaro extends Component {
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
          <div className="image">
            <img src={image4} />
          </div>
          <div className="image">
            <img src={image5} />
          </div>
          <div className="image">
            <img src={image6} />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default MyCaro;
