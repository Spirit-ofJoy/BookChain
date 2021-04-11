import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "./animation.min.css";
import m from "./../logos/dark.png";

class Home extends Component {
  render() {
    return (
      <div className="the-fixed-background-root-div">
        <div className="colored-background-div"></div>
        <div className="set-div-to-full-screen">
            <div>
                {/* <img src={m} alt=""/> */}
                <h1 className="heading">BookChain</h1>
                <h2 className="heading">A BlockChain Market Place <br />for Books<span>.</span></h2>
            </div>
          <div className="clip-path-no-up background-choose">
            <div className="text-in-special">
            <div>
                <a className="links-homie" href="http://localhost:3000/search">
                  <h1 className="fadeInLeft heading">Click here <i class="ri-check-double-line"></i></h1>
                  </a>
                  <h4 className="heading">
                    Head on over to the<br></br>demo appliciation page
                  </h4>
                
              </div>
            </div>
          </div>
        </div>
        <div className="set-div-to-full-screen">
          <div className="clip-path-no-bottom background-choose">
            <div className="text-in-special"></div>
          </div>
        </div>
        <div className="set-div-to-full-screen">
          <div className="clip-path-no-up background-choose">
            <div className="text-in-special">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
