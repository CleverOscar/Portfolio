import React, {useState} from 'react';
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
} from 'reactstrap';

const NavbarMenu = () => {

    // simple logic for navbar
    const [isOpen, setIsOpen] = useState(false);
    // toggle function to setIsOpen to either false or true
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Clever Oscar</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
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