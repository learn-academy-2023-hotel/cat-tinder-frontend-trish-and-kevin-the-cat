import React from "react"
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand>Cat Tinder</NavbarBrand>
      <Nav justified>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex">See the Cats</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew">Create a Purrfile</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header
