import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import {Switch, Route, Link} from 'react-router-dom';

import About from '../views/About/About.js';


import './navbar.css';

const NavbarMenu = () => {

    // simple logic for navbar
    const [isOpen, setIsOpen] = useState(false);
    // toggle function to setIsOpen to either false or true
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="navbarFixed">
            <Navbar fixed="top" color="light" light expand="md">
                <NavbarBrand href="/">Clever Oscar</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            
                                <NavLink href="/about" >
                                    About
                                </NavLink>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink href='/projects'>
                                Projects
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarMenu;