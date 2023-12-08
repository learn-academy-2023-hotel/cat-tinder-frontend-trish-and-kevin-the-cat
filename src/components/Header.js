import React from "react"
import { Nav, NavItem  } from "reactstrap"
import { NavLink } from "react-router-dom"
const Header = () => {
  return(
    <header>
      <Nav
        justified
        pills
      >
        <NavItem>
          <NavLink
            active
            to="/"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex">
            See the Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew">
            Create a Purrfile
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header
