import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/l1.jpg";
import image2 from "../images/l3.jpg";
import image3 from "../images/rec2.jpg";
import "./mycaro.css";

class MyCaro2Phone extends Component {
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
        </Carousel>
      </div>
    );
  }
}
export default MyCaro2Phone;
