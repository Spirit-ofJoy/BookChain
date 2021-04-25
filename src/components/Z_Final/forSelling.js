import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
// import Loading from "../Loading";

class D extends Component {
  render() {
    return (
      <>
        {/* <Loading time={2} /> */}
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-sm-12 nopad">
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                <div className="container-fluid">
                  <Jumbotron
                    className="text-center"
                    style={{ maxWidth: "80%" }}
                  >
                    <h2>my Items up for selling</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Info</th>
                          <th scope="col">Type</th>
                          <th scope="col">Price</th>
                          <th scope="col">Owner</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody id="productList">
                        {this.props.products.map((product, key) => {
                          return (
                            <tr key={key}>
                              <th scope="row">
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? product.id.toString()
                                  : null}
                              </th>
                              <td>
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? product.name
                                  : null}
                              </td>
                              <td>
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? product.info
                                  : null}
                              </td>
                              <td>
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? product.author
                                  : null}
                              </td>
                              <td>
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? window.web3.utils.fromWei(
                                      product.price.toString(),
                                      "Ether"
                                    )
                                  : null}
                              </td>
                              <td>
                                {product.owner === this.props.account &&
                                !product.purchased
                                  ? product.owner
                                  : null}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Jumbotron>
                </div>
                <p>&nbsp;</p>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default D;
