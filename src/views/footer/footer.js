import React from 'react';
import './footer.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';


function Footer(props) {
    return(
        <div> 
            <footer className="navbar footer"> 
            <Row xs="2">
              <Col>
                <Navbar>
                    <NavbarBrand>
                        CleverOscar
                    </NavbarBrand>
                    <Nav>
                        <NavItem> 
                            <NavLink>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem> 
                            <NavLink>
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
              </Col>
              <Col>
                <h3>Want to work together?</h3>
              </Col>
            </Row>
            </footer>
        </div>
    )
}

export default Footer;