import React, { Component } from "react";
import "./itembox.css";

class MoreDetailsList extends Component {
  render() {
    const { moreDetails } = this.props;
    const list = moreDetails.map((li) => {
      return (
        <li
          className="list-check-item-more-detail"
          id={Math.random() + Math.random() + " "}
        >
          <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
          <i className="ri-arrow-drop-right-line list-check-item-more-detail-icon"></i>
          <span></span>
          {li}
        </li>
      );
    });
    if (moreDetails.length) {
      return (
        <div className="item-more-information-list">
          <h3 className="item-box-label">More info:</h3>
          <ul className="list-more-detail">{list}</ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MoreDetailsList;
