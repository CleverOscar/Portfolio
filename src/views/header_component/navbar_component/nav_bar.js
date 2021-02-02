import React, {useState} from 'react'
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navigation = (props)=> {
  // toggler logic
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar light expand='sm'>
        <NavbarBrand href="/" className="text-primary">Clever Oscar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AboutMe"> About </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation