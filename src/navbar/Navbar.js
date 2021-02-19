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
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Projects
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Vianna Brothers
                                </DropdownItem>
                                < DropdownItem divider />
                                <DropdownItem>
                                    Neighborhood Chef
                                </DropdownItem>
                                < DropdownItem divider />
                                < DropdownItem >
                                    Miracle Messages Map API
                                </ DropdownItem >
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText> Happy Coding :)</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarMenu;