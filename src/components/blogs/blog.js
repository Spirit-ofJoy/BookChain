import React, { Component } from "react";
import "./blog.css";

class Blog extends Component {
  state = {
    heading:" ",
    content:" "
  };

  /**
   * 
   * @param {string} heading the heading of the content
   * @returns A JSX with heading and appropriate icon styled with classes with it
   */
  changeHeading(heading) {
    if (heading === "added") {
      return (
        <h1 className="blog-heading">
          Added <i class="ri-check-double-line blog-heading-added"></i>{" "}
        </h1>
      );
    } else if (heading === "notice") {
      return (
        <h1 className="blog-heading">
          Notice <i class="ri-file-paper-2-line blog-heading-notice"></i>{" "}
        </h1>
      );
    } else if (heading === "request" || heading === "requesting") {
      return (
        <h1 className="blog-heading">
          Request <i class="ri-add-fill blog-heading-request"></i>{" "}
        </h1>
      );
    } else {
      return (
        <h1 className="blog-heading">
          Thoughts <i class="ri-chat-1-line blog-heading-else"></i>{" "}
        </h1>
      );
    }
  }
  /**
   * Start
   */
  render() {
    const { AllCardDetails } = this.props;
    const CardList = AllCardDetails.map((ParticularCard) => {
      return (
        <div className="col-12 the-blog-containing-div">
          <div className="blog-heading-div">
            {this.changeHeading(ParticularCard.heading)}
          </div>

          <div className="blog-content-div">
            <p className="blog-content blog-padding-content">
              {ParticularCard.content}
            </p>
          </div>
        </div>
      );
    });
    if (AllCardDetails.length) {
      return (
        <div className="row g-4 set-height-in-items-container">{CardList}</div>
      );
    } else {
      return (
        <div className="no-items-in-the-list">
          No blogs could be found <br />
          Try adding one.... : ) <br />
        </div>
      );
    }
  }
  /**
   * End
   */

}

export default Blog;
