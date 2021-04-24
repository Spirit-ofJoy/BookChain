import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Filterchat from "./filterchat";

var user;
var newArray=[];
class Mychat extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
        showComponent: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        var acc = this.props.account;
        var arr = this.props.chats;
        newArray = arr.filter(function (el) {
            return ((el.writer == acc && el.receiver == event.target.value) || (el.writer == event.target.value && el.receiver == acc)) ;
        });
        
      }
    
      _handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        this.setState({
          showComponent: true,
        });
        console.log(this.props.chats);
                  
        console.log(newArray)
        event.preventDefault();
      }
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
//    var newArray=[];
    // var acc = this.props.account;
    // var arr = this.props.chats;
    // var newArray = arr.filter(function (el) {
    //     return el.writer == acc || el.receiver == value ;
    // });
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
                 
                //   console.log(newArray)
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
              <p>&nbsp;</p>
              <div className="container-fluid">
                <Jumbotron className="text-center" style={{ maxWidth: '50%' }}>
                {/* <form onSubmit={(event) => {
                  event.preventDefault()
                  
                  
                  user = this.user.value;
                  
                    newArray = arr.filter(function (el) {
                        return el.writer == acc || el.receiver == user ;
                    });
                  
                  console.log(this.props.chats);
                  
                  console.log(newArray)
                  event.stopPropagation();
                  this.forceUpdate();
                }}>
                
                
                <div className="form-group mr-sm-2">
                  <input
                    id="user"
                    type="text"
                    ref={(input) => { this.user = input }}
                    className="form-control"
                    placeholder="Address"
                    required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Search</button>
              </form> */}
              <form onSubmit={this._handleSubmit}>
                <div className="form-group mr-sm-2">
                
                <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"  placeholder="Search Address"
                    required />
                </div>
                {/* <input type="submit" value="Search"  className="btn btn-primary btn-block"/> */}
            </form>
              </Jumbotron>
              </div>
       
        <div className="container" style={{ marginTop: "60px",marginBottom: "60px",width: "100%"  }}>
        {
            <Filterchat AllCardDetails={newArray} />
           
        }
            
        </div>
      </div>
          </main>
        </div>
      </div>
      </>
    );
  }
}

export default Mychat;
