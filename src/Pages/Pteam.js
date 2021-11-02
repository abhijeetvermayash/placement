import React from "react";
import "./pteam.css";
import image1 from "../images/pt1.jpg";
import image2 from "../images/pt2.jpg";
class Pteam extends React.Component {
  render() {
    return (
      <div class="cards1">
        <div class="card1">
          <figure class="item">
            <img class="img1" src={image1} />
            <figcaption style={{ color: "black" }} class="caption">
              <h2>
                Dr. Aswath M. U<h3>Principal Advisor –Training & Placement</h3>
              </h2>
            </figcaption>
          </figure>
        </div>
        <div class="card1">
          <figure class="item">
            <img class="img1" src={image2} />
            <figcaption style={{ color: "black" }} class="caption">
              <h2>
                Dr. Reddappa H.N.
                <h3>Placement Officer</h3>
              </h2>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Pteam;
