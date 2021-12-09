import React from "react";
import "./Pop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Pop(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Pop;
