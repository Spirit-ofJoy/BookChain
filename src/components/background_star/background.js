import React, { Component } from "react";
import Stars from "./stars";

import "./styles/fullscreen.css";

class Background extends Component {
  render() {
    return (
      <div className="screen-covers-full-viewport-fixed">
        <Stars />
      </div>
    );
  }
}

export default Background;
