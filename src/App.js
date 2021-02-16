import React from 'react';

import {Container} from 'reactstrap';

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
      < About />
    </Container>
  </div>
);
}

export default App;
