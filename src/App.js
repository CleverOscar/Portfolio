import React from 'react';

import {Container, Row, Col} from 'reactstrap';

// Views

// Navbar

import NavbarMenu from './navbar/Navbar.js';

// Components
import About from './views/About.js';


function App() {
return (
  <div className="App">

    <div>
      <NavbarMenu />
    </div>

    <Container>
      <Row>
        <Col>
          < About />
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default App;
