import React, { Component } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
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
          className="style top-bottom starbg textfont"
          id="navbar"
        >
          <Navbar.Brand href="/" className="title-nav">
            <img className="logoimg" src={im1} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink eventKey="blogs" hresname="nav-items" href="/productAdd">
                Add Books
              </NavLink>

              <NavLink
                eventKey="blogs"
                hresname="nav-items"
                href="/ItemsOnSale"
              >
                Items on Sale
              </NavLink>

              <NavLink eventKey="blogs" hresname="nav-items" href="/ItemsOwned">
                My Items
              </NavLink>

              <NavLink eventKey="blogs" hresname="nav-items" href="/search">
                Search Books
              </NavLink>

              <NavLink
                className="itemfont"
                eventKey="blogs"
                href="/network"
                className="nav-items"
              >
                Discussion
              </NavLink>
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
      
    );
  }
}

export default Navigbar;
