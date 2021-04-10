import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import im1 from "../images/favicon.png";
import "./navbar.css";

class Navigbar extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          variant="light"
          className="style top-bottom starbg"
          id="navbar"
        >
          <Navbar.Brand href="/" className="title-nav">
            <img className="logoimg" src={im1} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link eventKey="blogs" hresname="nav-items" href="/productAdd">
                Add Products
              </Nav.Link>

              <Nav.Link eventKey="blogs" hresname="nav-items" href="/ItemsOnSale">
                Items on Sale
              </Nav.Link>

              <Nav.Link eventKey="blogs" hresname="nav-items" href="/ItemsOwned">
                My Items
              </Nav.Link>

              <Nav.Link eventKey="blogs" hresname="nav-items" href="/search">
                Search Books
              </Nav.Link>

              <Nav.Link eventKey="blogs" href="/network" className="nav-items">
                Discussion
              </Nav.Link>
            </Nav>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                <small className="text-white">
                  <span id="account">{this.props.account}</span>
                </small>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </>
      // <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{color: "white"}}>
      //   <a
      //     className="navbar-brand col-sm-2 col-md-1 mr-0 nav-link"
      //     // href="http://www.dappuniversity.com/bootcamp"
      //     href="/"
      //   >
      //     BookChain
      //   </a>

      //   <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">Dashboard</span></a>
      //   <a className="nav-link" href="/network">Discussion <span className="sr-only">Discussion</span></a>
      //   <ul className="navbar-nav px-3">
      //     <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
      //       <small className="text-white"><span id="account">{this.props.account}</span></small>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navigbar;
