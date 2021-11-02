import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../images/d1.jpg";
import image2 from "../images/d2.jpg";
import image3 from "../images/d3.jpg";
import image4 from "../images/d4.jpg";
import image5 from "../images/d5.jpg";
import image6 from "../images/d6.jpg";
import image7 from "../images/d7.jpg";
import image8 from "../images/d8.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./move.css";

export default class Move extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      swipeable: true,
      speed: 5,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <center>
          <Slider {...settings}>
            <div>
              <img style={{}} src={image4} />
            </div>

            <div>
              <div>
                <img style={{}} src={image2} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image3} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image4} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image5} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image6} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image7} />
              </div>
            </div>
            <div>
              <div>
                <img style={{}} src={image8} />
              </div>
            </div>
          </Slider>
        </center>
      </div>
    );
  }
}
