import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import "./mycaro.css";
import "./Alumni.scss";

import image1 from "../images/a1.jpg";
import image2 from "../images/a2.jpg";
import image3 from "../images/a3.jpg";
import image4 from "../images/a4.jpg";
import image5 from "../images/a5.jpg";
import image6 from "../images/a6.jpg";
import image7 from "../images/a7.jpg";
class Alumni extends Component {
  render() {
    return (
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={30}
          swipeable={false}
          stopOnHover={false}
        >
          <div>
            <div class="container mt-5">
              <div class="row">
                <div class="col-12">
                  <article class="blog-card">
                    <div class="blog-card__info">
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                          float: "left",
                          margin: "20px",
                        }}
                        src={image1}
                      />
                      <br />
                      <br />
                      <center>
                        <p>
                          <h2> Ananya Madhusudhan</h2>
                        </p>
                        <h3>
                          Computer Science and Engineering - 2020
                          <br />
                          One Direct - Full Stack Developer
                        </h3>
                        <p>
                          "When you are passionate about what you do, you would
                          have reached halfway towards the goal. I always tried
                          to enhance my skills by participating in technical
                          events conducted in and out of the college. I
                          concentrated on academics and also practiced coding on
                          competitive coding platforms. Placement Center gave me
                          the opportunity to enhance my skills and I was placed
                          in OneDirect as Full Stack Developer with a package of
                          Rs: 20.LPA. I express my profound gratitude for my
                          teachers of BIT for helping me in achieving my goals."
                        </p>
                      </center>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container mt-5">
              <div class="row">
                <div class="col-12">
                  <article class="blog-card">
                    <div class="blog-card__info">
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                          float: "left",
                          margin: "20px",
                        }}
                        src={image2}
                      />
                      <br />
                      <br />
                      <center>
                        <p>
                          <h2> Sathvika.R.V</h2>
                        </p>
                        <h3>
                          Information Science and Engineering - 2019
                          <br />
                          CISCO - Network Engineer
                        </h3>
                        <p>
                          "I am Sathvika RV, alumni of BIT. My journey of four
                          years in the college was one of the most memorable
                          ones. Our teaching and non-teaching staff was very
                          supportive throughout. Being placed through campus, I
                          have the privilege to mention that BIT has one of the
                          finest placements records. Our Placement Center gets
                          the best possible companies which helps students have
                          the best career ahead. I am grateful and proud to be a
                          BITian!!"
                        </p>
                      </center>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container mt-5">
              <div class="row">
                <div class="col-12">
                  <article class="blog-card">
                    <div class="blog-card__info">
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                          float: "left",
                          margin: "20px",
                        }}
                        src={image3}
                      />
                      <br />
                      <br />
                      <center>
                        <p>
                          <h2>Priya Ravi</h2>
                        </p>
                        <h3>
                          Computer Science and Engineering – 2019
                          <br />
                          Target Corporation
                        </h3>
                        <p>
                          "I graduated from Computer Science and Engineering
                          from BIT during 2019. Four years of college had been a
                          rollercoaster of emotions that I enjoyed the most. I
                          have immense gratitude towards all my lecturers,
                          non-teaching staffs and my friends. They have built me
                          up and helped me discover my true potentials. Thanks
                          to the guidance and opportunities provided by the
                          placement cell that i'm placed in Target with a good
                          package."
                        </p>
                      </center>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container mt-5">
              <div class="row">
                <div class="col-12">
                  <article class="blog-card">
                    <div class="blog-card__info">
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                          float: "left",
                          margin: "20px",
                        }}
                        src={image4}
                      />
                      <br />
                      <br />
                      <center>
                        <p>
                          <h2>Ajay Krishna</h2>
                        </p>
                        <h3>
                          Mechanical Engineering - 2019
                          <br />
                          Boeing - Mechanical Design and Analysis Engineer
                        </h3>
                        <p>
                          "The college encourages the development of necessary
                          soft-skills along with Technical Knowledge. The
                          Training and placement cell was instrumental in
                          inviting top companies to visit the campus which
                          helped me to start my career in one of the prestigious
                          organization Boeing International Corporation India
                          Pvt. Ltd."
                        </p>
                      </center>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Alumni;
