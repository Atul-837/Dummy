import React, {Component} from "react";
import Jumbotron from "react-bootstrap"
import { Navbar, NavbarBrand,NavbarToggler, Nav, Collapse, NavItem, NavbarText } from "reactstrap";
import {NavLink} from "react-router-dom"

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
            }
            this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
          <>
            <Navbar dark color="dark" expand="md">
              <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse
                  isOpen={this.state.isNavOpen}
                  navbar
                  className="justify-content-center"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span>HOME
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span>ABOUT US
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg"></span>MENU
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg"></span>
                        CONTACT US
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
            <div
              class="jumbotron jumbotron-fluid"
              style={{ backgroundColor: "black" }}
            >
              <div class="container d-flex align-items-center">
                <h1 class="display-4">
                  <img src="./images/HR.png" />
                </h1>
                <p class="lead" style={{ color: "aliceblue" }}>
                  ROAD TO SPECIALITY FOOD MADE IN HIMALAYA'S SERVED IN PLAINS{" "}
                </p>
              </div>
            </div>
          </>
        );
    }
}


export default Header