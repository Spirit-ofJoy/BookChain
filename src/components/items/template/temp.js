import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./itembox.css";

class ItemBox extends Component {
  primary_book_color = [
    "#4089ff",
    "#74D3AE",
    "#C2AFF0",
    "#9191E9",
    "#735CDD",
    "#E76B74",
    "#EA526F",
    "#9323de",
    /*From here*/ "#a019fa",
    "#6419fa",
    "#7bd929",
  ];
  chit_color = ["#7dffbe", "#bd7aeb", "#7ad3eb", "#f0d989", "#fc90fc"];
  binding_color = [
    "#136F63",
    "#303633",
    "#457EAC",
    "#2D5D7B",
    "#c75a61",
    "#0d324d",
    /*From Here*/ "#2d2a3d",
    "#201a42",
    "#2e005c",
  ];
  book_cardboard_color = ["#832232", "#b85157", "#041B15", "#0d324d"];
  randomPrimaryColor() {
    return this.primary_book_color[
      Math.floor(Math.random() * this.primary_book_color.length)
    ];
  }

  randomChitColor() {
    return this.chit_color[Math.floor(Math.random() * this.chit_color.length)];
  }

  randomBindingColor() {
    return this.binding_color[
      Math.floor(Math.random() * this.binding_color.length)
    ];
  }

  randomCardboardColor() {
    return this.book_cardboard_color[
      Math.floor(Math.random() * this.book_cardboard_color.length)
    ];
  }

  render() {
    return (
      <div className="col-lg-6vcol-sm-12 col-12 whole-item-container-div">
        <div className="book-in-item-box">
          {/**
           * From here the SVG of Books start.
           */}
          <svg
            className="book-svg-in-item-box"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m128.961 0 16.707 189.99-16.707 191.8h-1.73c-30.44 0-55.12 24.68-55.12 55.11v-400.84c0-19.92 16.15-36.06 36.06-36.06z"
                fill={this.randomBindingColor()}
              />
              <path
                d="m432.001 413.162v67.469h-311.58c-12.834 0-23.247-10.412-23.247-23.247v-20.976c0-12.834 10.412-23.247 23.247-23.247h311.58z"
                fill="#d9ecfd"
              />
              <path
                d="m432.001 446.897v33.735h-311.58c-12.834 0-23.247-10.412-23.247-23.247v-10.488z"
                fill="#c5e2ff"
              />
              <path
                d="m432.677 0h-303.718v381.79h-1.731c-30.439 0-55.115 24.676-55.115 55.115v19.981c0 30.439 24.676 55.115 55.115 55.115h305.449c3.983 0 7.211-3.229 7.211-7.211v-18.543c0-3.983-3.229-7.211-7.211-7.211h-305.448c-12.232 0-22.149-9.916-22.149-22.149v-19.981c0-12.233 9.917-22.149 22.149-22.149h305.449c3.983 0 7.211-3.229 7.211-7.211v-25.756-374.579c0-3.982-3.229-7.211-7.212-7.211z"
                fill={this.randomPrimaryColor()}
              />
              <path
                d="m127.229 381.789c-30.439 0-55.115 24.676-55.115 55.115v19.981c0 30.439 24.676 55.115 55.115 55.115h305.449c3.983 0 7.211-3.229 7.211-7.211v-18.543c0-3.983-3.229-7.211-7.211-7.211h-305.449c-12.232 0-22.149-9.916-22.149-22.149v-19.981c0-12.233 9.916-22.149 22.149-22.149h305.449c3.983 0 7.211-3.229 7.211-7.211v-25.755h-312.66z"
                fill={this.randomCardboardColor()}
              />
              <path
                d="m370.407 140.439h-171.826c-3.866 0-7-3.134-7-7v-69.157c0-3.866 3.134-7 7-7h171.826c3.866 0 7 3.134 7 7v69.156c0 3.867-3.134 7.001-7 7.001z"
                fill={this.randomChitColor()}
              />
              <g>
                <g>
                  <path
                    d="m344.245 256.61h-119.501c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h119.501c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                    fill="#d9ecfd"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m344.245 293.508h-119.501c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h119.501c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z"
                    fill="#d9ecfd"
                  />
                </g>
              </g>
            </g>
          </svg>
          {/**
           * SVG of books ends here
           */}
        </div>
        <div className="right-side-of-book">
          <div className="heading-of-item-box">
            <h1 className="item-name indent-text">Apple Iphone X</h1>
          </div>
          <div className="item-more-information indent-text">
            <div className="item-price-in-box">
              <Link>$2398</Link>
            </div>
            <h3 className="item-box-label">More info:</h3>
            <div className="item-more-information-list">
              <ul className="list-more-detail">
                <li className="list-check-item-more-detail">
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <span></span>64 GB Ram
                </li>
                <li className="list-check-item-more-detail">
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <span></span>128 GB Storage
                </li>
                <li className="list-check-item-more-detail">
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
                  <span></span>64 GB Ram
                </li>
              </ul>
            </div>
            <button className="buy-item-now-button">Buy Now</button>
          </div>
          <div className="item-more-information indent-text">
            <h4 className="item-box-label">
              From: <Link className="item-owner-id">354ga3514eav5w4386a4</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemBox;
