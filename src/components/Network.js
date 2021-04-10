import React, { Component } from 'react';
import { Container, Jumbotron } from "react-bootstrap";

class Network extends Component {

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
                  console.log(this.props.posts.writer)
                  this.props.createPost(heading, content)
                }}>
                <div className="form-group mr-sm-2">
                <div class="form-group">
                  <label for="postHeading">Example multiple select</label>
                  <select multiple class="form-control" id="postHeading" ref={(input) => { this.postHeading = input }}>
                    <option>others</option>
                    <option>added</option>
                    <option>request</option>
                    <option>notice</option>
                  </select>
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
              <p>&nbsp;</p>
              <div className="container-fluid">
                <Jumbotron className="text-center" style={{ maxWidth: '50%' }}>
              { this.props.posts.map((post, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      {/* <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(post.author, 30).toString()}`}
                      /> */}
                      <small className="text-muted">{post.writer}</small>
                    </div>
                    <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>{post.content}</p>
                      </li>
                      {/* <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(post.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={post.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipPost(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li> */}
                    </ul>
                  </div>
                )
              })}
              </Jumbotron></div>
            </div>
          </main>
        </div>
      </div>
      </>
    );
  }
}

export default Network;
