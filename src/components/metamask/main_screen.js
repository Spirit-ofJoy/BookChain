import React, { Component } from "react";
import "./wave_left_side.css";
import MetamaskLogo from "./metamaskLogo";
import Info from "./the_info_box";

/**
 * This is the main screen where sign in and sign in pages are combined.
 * Swithch and NavLink is used.
 */
class MetaMask extends Component {
  render() {
    return (
      <div id="login-sign-up-page-content">
        <div id="login-sign-up-page-right-side-box">
          <div>
            <MetamaskLogo />
            <h1 align="center" className="logo-title-about-page">
              MetaMask
            </h1>
          </div>
        </div>
        <div id="complete-waves-section">
          <div className="wave-margin-boxes">
            <div className="wave"></div>
            <svg
              className="login-waves"
              viewBox="0 24 50 150"
              preserveAspectRatio="none"
              version="1.1"
              id="svg15"
              width={50}
              height={150}
            >
              <defs id="defs3">
                <path
                  id="gentle-wave"
                  d="m -160,44 c 30,0 58,-18 88,-18 30,0 58,18 88,18 30,0 58,-18 88,-18 30,0 58,18 88,18 v 44 h -352 z"
                />
              </defs>
              <g
                className="login-parallax"
                id="g13"
                transform="rotate(90,-21.554545,88.174335)"
              >
                <use
                  xlinkHref="#gentle-wave"
                  x={4}
                  y={0}
                  id="use5"
                  width="100%"
                  height="100%"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={4}
                  y={3}
                  id="use7"
                  width="100%"
                  height="100%"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={4}
                  y={5}
                  id="use9"
                  width="100%"
                  height="100%"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={4}
                  y={11}
                  id="use11"
                  width="100%"
                  height="100%"
                />
              </g>
            </svg>
          </div>
        </div>
        <div id="login-signup-left-section">
          <Info />
        </div>
      </div>
    );
  }
}

export default MetaMask;
