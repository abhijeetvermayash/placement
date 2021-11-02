import React from "react";
import "./footer.css";
import logo from "../images/logo.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

import Scroll from "react-scroll";
class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <footer class="footer-distributed">
          <div class="footer-left">
            <img src={logo} />
            <h3>
              BIT&nbsp;&nbsp;<span>BANGALORE</span>
            </h3>

            <p class="footer-links">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
              &nbsp; |
              <Link
                activeClass="active"
                to="placementStats"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                &nbsp;STATS
              </Link>
              &nbsp; |
              <Link
                activeClass="active"
                to="recruiters"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                &nbsp; RECRUITERS&nbsp;
              </Link>
              |
              <Link
                activeClass="active"
                to="alumni"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                &nbsp;ALUMI&nbsp;
              </Link>
            </p>
            <p style={{ color: "white" }}>
              © 2021 BIT. All rights reserved. Bangalore Institute of Technology
              (BIT)
            </p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span>
                  BANGALORE INSTITUTE OF TECHNOLOGY K.R. ROAD, V V PURA,
                  BENGALURU-560004 INDIA <br />
                  Email:- principalbit4@gmail.com,
                  principal@bit-bangalore.edu.in
                  <br /> Phone : +91-080-26615865 , 26613237
                  <br /> Fax : +91-080-22426796
                </span>
              </p>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-company-about">
              <span>PLACEMENT BIT</span>
            </p>
            <div>
              <i class="fa fa-phone"></i>
              <p style={{ color: "#e0ac1c" }}>Placement BIT: 080-22422741</p>
            </div>
            <br />
            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a
                  style={{ color: "#e0ac1c" }}
                  href="mailto:placement@bit-bangalore.edu.in"
                >
                  Email: placement@bit-bangalore.edu.in , bitplacement@yahoo.co
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
