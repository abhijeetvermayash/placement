import React from "react";
import "./fplac.css";
import image1 from "../images/fp1.jpg";
import image2 from "../images/fp2.jpg";
import image3 from "../images/fp3.jpg";
import image4 from "../images/fp4.jpg";
import image5 from "../images/fp5.jpg";
import image6 from "../images/fp6.jpg";
import image7 from "../images/fp7.jpg";
import image8 from "../images/fp8.jpg";
import image9 from "../images/fp9.jpg";
import image10 from "../images/fp10.jpg";
import image11 from "../images/fp11.jpg";
class Fplac extends React.Component {
  render() {
    return (
      <div class="cards2">
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image1} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. S. Gangadhar
                <h4>Civil Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image2} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Dr. B. V. Lingesh
                <h4>Mechanical Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image3} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. A. N. Smitha
                <h4>Electrical & Electronics Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image4} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. R. Krishna
                <h4>Electronics & Communication Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image5} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. Prathima. M. G<h4>Computer Science & Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image6} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. L. K. Sudha
                <h4>Electronics & Instrumentation Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image7} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Dr. Davy George
                <h4>Ind Engineering & Management Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image8} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. B. Sudha
                <h4>Electronics & Telecommunication Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image9} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. J. Padmanabha
                <h4>Information Science & Engineering</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image10} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Prof. Seema Nagaraj
                <h4>Master of Computer Applications(MCA)</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
        <div class="card2">
          <figure class="item2">
            <img class="img2" src={image11} />
            <figcaption style={{ color: "black" }} class="caption">
              <h3>
                Dr. Mahesh. K<h4>Master of Business Administration(MBA)</h4>
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Fplac;
