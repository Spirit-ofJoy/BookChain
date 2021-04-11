import React, { Component } from "react";
import Stars from "./stars";
import MidlleLogoScreen1 from "./middlelogo";
import BottomQuotesScreen1 from "./bottom-quotes-screen-1";

import "./styles/fullscreen.css";

class WelcomeScreen1 extends Component {
  render() {
    return (
      <div className="screen-covers-full-viewport welcome-screen-1">
        <Stars />
        <MidlleLogoScreen1 />
        <BottomQuotesScreen1 />
      </div>
    );
  }
}

export default WelcomeScreen1;
