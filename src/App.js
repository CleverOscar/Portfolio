import React from 'react';

import {Container} from 'reactstrap';

// Views
// Navbar
import NavbarMenu from './navbar/Navbar.js';

// Components
import About from './views/About/About.js';
import CarouselComponent from './views/Carousel/Carousel.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          src: 'https://dummyimage.com/hd720',
          altText: 'Slide 1',
          caption: 'Slide 1'
        }, {
          id: 2,
          src: 'https://dummyimage.com/hd720',
          altText: 'Slide 2',
          caption: 'Slide 2'
        }, {
          id: 3,
          src: 'https://dummyimage.com/hd720',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ],  
    }
  }
  
  render() {
    return (
    <div className="App">

      <div>
        <NavbarMenu />
      </div>

      <Container>
        < About />
        
        <CarouselComponent carouselProps={this.state.items} />
      </Container>
    </div>
  )
  }
}

export default App;
