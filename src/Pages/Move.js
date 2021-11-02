import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../images/a1.jpg";
import image2 from "../images/a2.jpg";
import image3 from "../images/a3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./move.css";

export default class Move extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      centerMode: true,
      width: 20,
      slidesToShow: 1,
      centerPadding: 0,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
        <Slider {...settings}>
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
            <img src={image1} />
          </div>
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
            <img src={image1} />
          </div>
        </Slider>
      </div>
    );
  }
}
