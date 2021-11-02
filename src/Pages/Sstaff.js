import React from "react";
import "./fplac.css";
import image1 from "../images/fp13.jpg";
import image2 from "../images/fp14.jpg";
import image3 from "../images/fp15.jpg";

class Sstaff extends React.Component {
  render() {
    return (
      <div class="cards2">
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image1} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                H. M. Dharmapale Gowda
                <h4>Mechanic</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image2} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Madhu. C. A<h4>Computer Operator</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image3} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                C. P. Mahadev
                <h4>Helper</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Sstaff;
