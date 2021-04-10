import React, { Component } from "react";
import Blog from "./blog";

class BlogList extends Component {
  state = [
    {
      heading:"added",
      content:"something"
    },{
      heading:"request",
      content:"something"
    },{
      heading:"notice",
      content:"everything"
    },{
      heading:"lmao",
      content:"lol"
    },{
      heading:"added",
      content:"op bhai op"
    }
  ];

  render() {
    return (
      <div className="container" style={{ marginTop: "60px",marginBottom: "60px",width: "100%"  }}>
        <Blog AllCardDetails={this.state} />
      </div>
    );
  }
}

export default BlogList;
