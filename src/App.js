import React from 'react';

import {Container} from 'reactstrap';

// Views

// Navbar

import NavbarMenu from './navbar/Navbar.js';

// Components
import About from './views/About/About.js';
import CarouselComponent from './views/Carousel/Carousel.js';


function App() {
return (
  <div className="App">

    <div>
      <NavbarMenu />
    </div>

    <Container>
      < About />
      
      <CarouselComponent />
    </Container>
  </div>
);
}

export default App;
