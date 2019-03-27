import React from "react";

import { Link } from "react-router-dom";
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarItem,
    // NavbarMenu,
    NavbarStart,
    NavbarDropdown,
    NavbarLink
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
        </Nav>
    );
}

export default Navbar;