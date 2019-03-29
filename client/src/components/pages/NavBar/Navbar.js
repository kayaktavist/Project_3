import React from "react";

import { Link } from "react-router-dom";
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarItem,
    // NavbarMenu,
    NavbarStart,
    NavbarDropdown,
    NavbarLink,
    NavbarEnd,
    Button
} from "bloomer";

function Navbar(props) {

    return (
        <Nav>
            <NavbarBrand>
                <NavbarItem>
                    <h1>ACTIVEST</h1>
                </NavbarItem>
            </NavbarBrand>

            {/* <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}> */}
                <NavbarStart>
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/discover" className="navbar-item">Discover</Link>

                    <NavbarItem hasDropdown isHoverable style={{ padding: 0 }}>
                        <NavbarLink>Featured</NavbarLink>
                        <NavbarDropdown>
                            <Link style={{ height: "100%" }} to="/featured" className="navbar-item">Featured </Link>
                        </NavbarDropdown>
                    </NavbarItem>
                </NavbarStart>
            {/* </NavbarMenu> */}
            <NavbarEnd>
          <NavbarItem>
            {props.authenticated ? (
              <div>Welcome {props.user.email}!</div>
            ) : (
              <div className="buttons">
                <Button onClick={props.signUpModal} isColor="primary">
                  <strong>Sign up</strong>
                </Button>
                <Button onClick={props.loginModal} isColor="light">
                  Log in
                </Button>
              </div>
            )}
          </NavbarItem>
        </NavbarEnd>
      
        </Nav>
    );
}

export default Navbar;