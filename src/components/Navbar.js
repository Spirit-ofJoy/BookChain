import React, { Component} from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { NavDropdown} from "react-bootstrap";
import im1 from "../images/favicon.png";
import "./navbar.css";

class Navigbar extends Component {
  // 
  render() {
    // const [show4, setShow4] = useState(false);
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
              <Nav.Link eventKey="blogs" hresname="nav-items" href="/productAdd">
                Add Items
              </Nav.Link>

              <Nav.Link
                eventKey="blogs"
                hresname="nav-items"
                href="/ItemsOnSale"
              >
                Items on Sale
              </Nav.Link>

              <Nav.Link eventKey="blogs" hresname="nav-items" href="/ItemsOwned">
                My Items
              </Nav.Link>

              <Nav.Link eventKey="blogs" hresname="nav-items" href="/search">
                Search Items
              </Nav.Link>

              <Nav.Link
                className="itemfont"
                eventKey="blogs"
                href="/network"
                className="nav-items"
              >
                Discussion
              </Nav.Link>

              <NavDropdown
              title="Chats"
              id="basic-nav-dropdown"
              // onMouseEnter={() => setShow4(true)}
              // onMouseLeave={() => setShow4(false)}
              // onTouchEnd={() => setShow4(!show4)}
              // show={show4}
            >
              <NavDropdown.Item href="/sent">Sent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/received">Received</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/mychat">Search</NavDropdown.Item>
            </NavDropdown>
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
