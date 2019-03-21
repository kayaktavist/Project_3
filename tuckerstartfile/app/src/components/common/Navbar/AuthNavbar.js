import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarDropdown,
  NavbarLink,
  Button
} from "bloomer";

function AuthNavbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav>
      <NavbarBrand>
        <NavbarItem>
          <h1>Reactify!</h1>
        </NavbarItem>

        <NavbarBurger onClick={() => setMenuOpen(!menuOpen)} />
      </NavbarBrand>

      <NavbarMenu isActive={menuOpen}>
        <NavbarStart>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="navbar-item"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/documentation"
            className="navbar-item"
          >
            Documentation
          </Link>
          <NavbarItem hasDropdown isHoverable style={{ padding: 0 }}>
            <NavbarLink>Examples</NavbarLink>
            <NavbarDropdown>
              <Link
                style={{ height: "100%" }}
                onClick={() => setMenuOpen(false)}
                to="/react-examples"
                className="navbar-item"
              >
                React Examples
              </Link>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <div>Welcome {props.user.email}!</div>
            <Button onClick={props.signOut} isColor="light">
              Log Out
            </Button>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Nav>
  );
}

export default AuthNavbar;
