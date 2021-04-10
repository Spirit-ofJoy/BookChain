import React, { Component } from 'react';
import { Container, Jumbotron } from "react-bootstrap";
import "./main.css"
import Typewriter from 'typewriter-effect';

var srch;

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-sm-12 nopad">
            <div className="content mr-auto ml-auto">


              <div id="content">
                <div className="container-fluid">
                {/* <Jumbotron className="text-center" style={{ maxWidth: '60%' }}> */}
                <Typewriter
                  className="type"
                  style={{color:"white"}}
                    options={{
                      strings: ['Welcome to', 'BOOKCHAIN'],
                      
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  {/* </Jumbotron> */}
                </div>
                <p>&nbsp;</p>
                <div className="container-fluid">
                  <Jumbotron className="text-center" style={{ maxWidth: '80%' }}>
                  
                    <h1 style={{ textAlign: "center" }}>Add Product</h1>
                    <form onSubmit={(event) => {
                      event.preventDefault()
                      const name = this.productName.value
                      const info = this.productInfo.value
                      const author = this.productAuthor.value
                      const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                      this.props.createProduct(name, info, author, price)
                    }}>
                      <div className="form-group mr-sm-2">
                        <input
                          id="productName"
                          type="text"
                          ref={(input) => { this.productName = input }}
                          className="form-control"
                          placeholder="Product Name"
                          required />
                      </div>
                      <div className="form-group mr-sm-2">
                        <input
                          id="productInfo"
                          type="text"
                          ref={(input) => { this.productInfo = input }}
                          className="form-control"
                          placeholder="Product Info"
                          required />
                      </div>
                      <div className="form-group mr-sm-2">
                        <input
                          id="productAuthor"
                          type="text"
                          ref={(input) => { this.productAuthor = input }}
                          className="form-control"
                          placeholder="Product Author"
                          required />
                      </div>
                      <div className="form-group mr-sm-2">
                        <input
                          id="productPrice"
                          type="text"
                          ref={(input) => { this.productPrice = input }}
                          className="form-control"
                          placeholder="Product Price"
                          required />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                      </div>
                    </form>
                  </Jumbotron></div>
                
                  <p>&nbsp;</p>
                <div className="container-fluid">
                  <Jumbotron className="text-center" style={{ maxWidth: '80%' }}>
                  
                    <h1 style={{ textAlign: "center" }}>Search Products</h1>
                    <form onSubmit={(event) => {
                      event.preventDefault();
                      event.stopPropagation();

                      srch = this.prodName.value
                      srch = srch.toLowerCase()
                      this.forceUpdate();
                      console.log(srch)
                      console.log(typeof(srch))
                    }}>
                      <div className="form-group mr-sm-2">
                        <input
                          id="prodName"
                          type="text"
                          ref={(input) => { this.prodName = input }}
                          className="form-control"
                          placeholder="Product Name"
                          required />
                      </div>
                      
                      <div style={{ textAlign: "center" }}>
                        <button type="submit" className="btn btn-primary" style={{marginBottom:"10px" }}>Search</button>
                      </div>
                    </form>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Info</th>
                          <th scope="col">Author</th>
                          <th scope="col">Price</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody id="productList">
                        {this.props.products.map((product, key) => {
                          return (
                            <tr key={key}>
                              <th scope="row">{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? product.id.toString() : null}</th>
                              <td>{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? product.name : null}</td>
                              <td>{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? product.info : null}</td>
                              <td>{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? product.author : null}</td>
                              <td>{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? window.web3.utils.fromWei(product.price.toString(), 'Ether') : null}</td>
                              <td>{(!product.purchased && ((product.name.toLowerCase()).includes(srch)))? product.owner : null}</td>
                              <td>
                                {((!product.purchased && ((product.name.toLowerCase()).includes(srch)))&& (product.owner !== this.props.account))
                                  ? <button
                                    className="btn btn-danger"
                                    name={product.id}
                                    value={product.price}
                                    onClick={(event) => {
                                      this.props.purchaseProduct(event.target.name, event.target.value)
                                    }}
                                  >
                                    Buy
                        </button>
                                  : (!product.purchased && ((product.name.toLowerCase()).includes(srch))) ? "Owner" : null
                                }
                              </td>

                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </Jumbotron></div>

                <p>&nbsp;</p>
                <div className="container-fluid">
                  <Jumbotron className="text-center" style={{ maxWidth: '80%' }}>
                    <h2>Products up for sale</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Info</th>
                          <th scope="col">Author</th>
                          <th scope="col">Price</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody id="productList">
                        {this.props.products.map((product, key) => {
                          return (
                            <tr key={key}>
                              <th scope="row">{!product.purchased ? product.id.toString() : null}</th>
                              <td>{!product.purchased ? product.name : null}</td>
                              <td>{!product.purchased ? product.info : null}</td>
                              <td>{!product.purchased ? product.author : null}</td>
                              <td>{!product.purchased ? window.web3.utils.fromWei(product.price.toString(), 'Ether') : null}</td>
                              <td>{!product.purchased ? product.owner : null}</td>
                              <td>
                                {(!product.purchased && (product.owner !== this.props.account))
                                  ? <button
                                    className="btn btn-danger"
                                    name={product.id}
                                    value={product.price}
                                    onClick={(event) => {
                                      this.props.purchaseProduct(event.target.name, event.target.value)
                                    }}
                                  >
                                    Buy
                        </button>
                                  : (!product.purchased) ? "Owner" : null
                                }
                              </td>

                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </Jumbotron></div>

                <p>&nbsp;</p>
                <div className="container-fluid">
                  <Jumbotron className="text-center" style={{ maxWidth: '80%' }}>
                    <h2>Product History</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Info</th>
                          <th scope="col">Author</th>
                          <th scope="col">Price</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Status</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      {/* <div> */}
                      <tbody id="productList" className="tableborder">
                        {this.props.products.map((product, key) => {
                          return (
                            <tr key={key}>
                              <th scope="row">{product.id.toString()}</th>
                              <td>{product.name}</td>
                              <td>{product.info}</td>
                              <td>{product.author}</td>
                              <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                              <td>{product.owner}</td>
                              <td>
                                {(!product.purchased && (product.owner !== this.props.account))
                                  ? <button
                                    className="btn btn-danger"
                                    name={product.id}
                                    value={product.price}
                                    onClick={(event) => {
                                      this.props.purchaseProduct(event.target.name, event.target.value)
                                    }}
                                  >
                                    Buy
                        </button>
                                  : (!product.purchased) ? "for Sale" : "Bought"
                                }
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                    {/* </div> */}
                  </Jumbotron></div>
                <p>&nbsp;</p>
              </div>
            </div>
          </main>
        </div></div>
    );
  }
}

export default Main;
