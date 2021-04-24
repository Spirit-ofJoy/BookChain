import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Chat from "./chat";



class Sent extends Component {

  // st = [{this.props.posts}]
  state = [
    {
      heading:"added",
      content:"something",
      receiver:"sdfghj45653563sd",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"request",
      content:"something",
      receiver:"sdfghj45823563sd",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"notice",
      content:"everything",
      receiver:"sdfghj45622563sd",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"lmao",
      content:"lol",
      receiver:"sdfghj45693563sd",
      blogger:"aihfoe3e54vs5e42e4"
    },{
      heading:"added",
      content:"op bhai op",
      receiver:"sdfgh145623563sd",
      blogger:"aihfoe3e54vs5e42e4"
    }
  ];
  
  // console.log({this.props.posts});
  
  render() {
    var acc = this.props.account;
    var arr = this.props.chats;
    var newArray = arr.filter(function (el) {
        return el.writer == acc;
      });
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
                  const content = this.chatContent.value
                  const heading = this.chatHeading.value
                  const receiver = this.chatReceiver.value
                  // console.log(this.props.posts.writer)
                  this.props.createChat(heading, content, receiver)
                  console.log(this.props.chats)
                 
                  console.log(newArray)
                }}>
                <div className="form-group mr-sm-2">
                <div class="form-group">
                <label for="chatHeading"></label>
                  <select id="chatHeading" className="form-control"  ref={(input) => { this.chatHeading = input }} required >
                    <option>Others</option>
                    <option>Added</option>
                    <option>Request</option>
                    <option>Notice</option>
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
                    id="chatContent"
                    type="text"
                    ref={(input) => { this.chatContent = input }}
                    className="form-control"
                    placeholder="What's on your mind?"
                    required />
                </div>
                <div className="form-group mr-sm-2">
                  <input
                    id="chatReceiver"
                    type="text"
                    ref={(input) => { this.chatReceiver = input }}
                    className="form-control"
                    placeholder="Receiver"
                    required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Share</button>
              </form>
              </Jumbotron>
              </div>

      <div className="container" style={{ marginTop: "60px",marginBottom: "60px",width: "100%"  }}>
        <Chat AllCardDetails={newArray} />
      </div>
      </div>
          </main>
        </div>
      </div>
      </>
    );
  }
}

export default Sent;
