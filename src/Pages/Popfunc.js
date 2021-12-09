import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Pop from "./Pop";
import popimage from "../images/image24.jpeg";

function Popfunction() {
  const [timedPopup, setTimedPopup] = useState(false);
  const mql = window.matchMedia("(max-width: 600px)");

  let mobileView = mql.matches;
  console.log(mobileView);
  if (!mobileView) {
    console.log("here");
    return (
      <>
        <Pop trigger={timedPopup} setTrigger={setTimedPopup}>
          <img src={popimage} style={{ height: "100%", width: "100%" }} />
          {/* <MyCaro /> */}
        </Pop>
      </>
    );
  }
}
export default Popfunction;
