import React from 'react';

import {Container} from 'reactstrap';

// Views
// Navbar
import NavbarMenu from './navbar/Navbar.js';

// Components
import About from './views/About/About.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          src: "https://i.ibb.co/LvXnrpS/Screen-Shot-2021-02-18-at-8-44-58-PM.png",
          altText: 'Vianna Brothers Jiu Jitsu',
          caption: 'Vianna Brothers Jiu Jitsu'
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
        

        <ul>
          {this.state.items.map(item => 
            <li key={item.id}>
              <img  src={item.src} alt={item.altText} />
            </li>  
          )}
        </ul>
      </Container>
    </div>
  )
  }
}

export default App;
