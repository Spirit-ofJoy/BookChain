import React, { Component } from "react";
import Blog from "./blog";

class BlogList extends Component {
  state = [
    {
      heading:"added",
      content:"something",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"request",
      content:"something",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"notice",
      content:"everything",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"lmao",
      content:"lol",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"added",
      content:"op bhai op",
      blogger:"aihfoe3e54vs5e42e4"
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
