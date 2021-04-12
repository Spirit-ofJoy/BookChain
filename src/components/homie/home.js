import React, { Component } from "react";
import "./home.css";
import "./animation.min.css";
import m from "./../logos/dark.png";
import MetamaskLogo from "./../metamask/metamaskLogo";

class Home extends Component {
  render() {
    return (
      <div className="the-fixed-background-root-div">
        <div className="colored-background-div"></div>
        <div className="bottom-arrow-home-page" id="metamask-arrow-link">
          <a href="/#metamask"><i class="ri-arrow-down-s-line"></i></a>
        </div>
        <div className="bottom-arrow-home-page" id="github-arrow-link">
          <a href="/#github"><i class="ri-arrow-down-s-line"></i></a>
        </div>
        <div className="bottom-arrow-home-page" id="home-arrow-link">
          <a href="/#bookchain"><i class="ri-arrow-up-s-line"></i></a>
        </div>
        <div id="metamask"></div>
        <div id="github"></div>
        <div id="bookchain"></div>
        <div className="set-div-to-full-screen">
          <div>
            {/* <img src={m} alt=""/> */}
            <h1 className="heading">BookChain </h1>
            <h2 className="heading">
              A BlockChain Market Place <br />
              for Books<span>.</span>
            </h2>
          </div>
          <div className="clip-path-no-up background-choose">
            <div className="text-in-special">
              <div>
                <a className="links-homie" href="http://localhost:3000/search">
                  <h1 className="fadeInLeft heading">
                    Click here <i class="ri-check-double-line"></i>
                  </h1>
                </a>
                <h4 className="heading">
                  Head on over to the<br></br>demo appliciation page
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="set-div-to-full-screen">
          <div id="MetaMask_homepage">
            {/* <img src={m} alt=""/> */}
            <MetamaskLogo />
            <h1 className="heading">MetaMask</h1>
          </div>
          <div className="clip-path-no-bottom background-choose">
            <div className="text-in-special">
              <div id="MetaMask_homepage_div">
                <a
                  className="links-homie"
                  href="http://localhost:3000/metamask"
                >
                  <h1 className="fadeInLeft heading">
                    How to use <br></br>MetaMask{" "}
                    <i class="ri-check-double-line"></i>
                  </h1>
                </a>
                <h4 className="heading">
                  Our app works with the help of <br></br>Metamask Chrome
                  extension
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="set-div-to-full-screen">
          <div>
            {/* <img src={m} alt=""/> */}
            <h1 className="heading">
              Github<span>.</span>com{" "}
            </h1>
            <h2 className="heading">
              Visit the open source <br /> Repository<span>.</span>
            </h2>
          </div>
          <div className="clip-path-no-up background-choose">
            <div className="text-in-special">
              <div>
                <a className="links-homie" href="http://localhost:3000/search">
                  <h1 className="fadeInLeft heading">
                    Spirit-ofJoy/
                    <br />
                    BookChain<i class="ri-bookmark-line"> </i>
                  </h1>
                </a>
                <h4 className="heading">Know our project better on Git</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
