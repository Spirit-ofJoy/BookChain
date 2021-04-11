import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

class Blog extends Component {
  state = {
    heading: " ",
    content: " ",
    writer: " "
  };

  /**
   *
   * @param {string} heading the heading of the content
   * @returns A JSX with heading and appropriate icon styled with classes with it
   */
  changeHeading(heading) {
    if (heading === "Added") {
      return (
        <h1 className="blog-heading">
          Added <i className="ri-check-double-line blog-heading-added"></i>{" "}
        </h1>
      );
    } else if (heading === "Notice") {
      return (
        <h1 className="blog-heading">
          Notice <i className="ri-file-paper-2-line blog-heading-notice"></i>{" "}
        </h1>
      );
    } else if (heading === "Request" || heading === "requesting") {
      return (
        <h1 className="blog-heading">
          Request <i className="ri-add-fill blog-heading-request"></i>{" "}
        </h1>
      );
    } else {
      return (
        <h1 className="blog-heading">
          Thoughts <i className="ri-chat-1-line blog-heading-else"></i>{" "}
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
              {/* <br /> */}
              
            </p>
            <p style={{textAlign:"right"}}>
            <span className="blog-blogger-name">
                -  <Link style={{color:"white"}}>{ParticularCard.writer}</Link>
              </span>
            </p>
          </div>
        </div>
      );
    });
    if (AllCardDetails.length) {
      return (
        <div className="row g-4 set-width-in-blog-container">{CardList}</div>
      );
    } else {
      return (
        <div className="col-12 the-blog-containing-div">
          <div className="blog-heading-div">
            Notice
          </div>

          <div className="blog-content-div">
            <p className="blog-content blog-padding-content">
            No blogs could be found <br />
          Try adding one.... : ) 
              {/* <br /> */}
              
            </p>
            
          </div>
        </div>
        
       
      );
    }
  }
  /**
   * End
   */
}

export default Blog;
