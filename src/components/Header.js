import React from "react"
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate("/")
  }

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
        <NavItem>
          <Button onClick={handleClick}>Log out</Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header
