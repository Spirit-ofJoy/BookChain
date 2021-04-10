import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Blog from "./blog";

class BlogList extends Component {

  // st = [{this.props.posts}]
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
    <>
    <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto">
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
    <div className="container-fluid">
                <Jumbotron className="text-center" style={{ maxWidth: '50%' }}>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const content = this.postContent.value
                  const heading = this.postHeading.value
                  // console.log(this.props.posts.writer)
                  this.props.createPost(heading, content)
                  console.log(this.props.posts)
                }}>
                <div className="form-group mr-sm-2">
                <div class="form-group">
                <label for="postHeading"></label>
                  <select id="postHeading" className="form-control"  ref={(input) => { this.postHeading = input }} required >
                    <option>others</option>
                    <option>added</option>
                    <option>request</option>
                    <option>notice</option>
                  </select>
                  {/* <input
                    id="postHeading"
                    type="text"
                    ref={(input) => { this.postHeading = input }}
                    className="form-control"
                    placeholder="topic?"
                    required /> */}
                </div>
                </div>
                <div className="form-group mr-sm-2">
                  <input
                    id="postContent"
                    type="text"
                    ref={(input) => { this.postContent = input }}
                    className="form-control"
                    placeholder="What's on your mind?"
                    required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Share</button>
              </form>
              </Jumbotron>
              </div>

      <div className="container" style={{ marginTop: "60px",marginBottom: "60px",width: "100%"  }}>
        <Blog AllCardDetails={this.props.posts} />
      </div>
      </div>
          </main>
        </div>
      </div>
      </>
    );
  }
}

export default BlogList;
