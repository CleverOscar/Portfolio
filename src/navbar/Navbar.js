import React, {useState} from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';

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
            </Navbar>
        </div>
    )
}

export default NavbarMenu;