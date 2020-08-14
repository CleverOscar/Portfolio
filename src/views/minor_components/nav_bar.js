import React, {useState} from 'react'
import './navbar.css'
import {  Link  } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const Navigation = (props)=> {
  // toggler logic
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar expand="md">
        <NavbarBrand href="/" className="text-primary">Clever Oscar</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about"> About </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
