import React from 'react';

import {Container} from 'reactstrap';

// Views
// Navbar
import {Switch, Route} from 'react-router-dom';

import NavbarMenu from './navbar/Navbar.js';

// Components
import About from './views/About/About.js';
import AboutPage from './views/About/AboutPage.js';
import Gallary from './views/Image_Gallary/ImageList.js'
import ContactForm from './views/Contact/Contact.js';

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 1,
          src: "https://i.ibb.co/LvXnrpS/Screen-Shot-2021-02-18-at-8-44-58-PM.png",
          altText: 'Vianna Brothers Jiu Jitsu',
          caption: 'Vianna Brothers Jiu Jitsu'
        }, {
          id: 2,
          src: 'https://i.ibb.co/vmDSSGC/Screen-Shot-2021-02-18-at-8-59-59-PM.png',
          altText: 'Miracle Messages MAP API',
          caption: 'Miracle Messages MAP API'
        }, {
          id: 3,
          src: 'https://i.ibb.co/k87YxLv/Screen-Shot-2021-02-18-at-9-01-41-PM.png',
          altText: 'CanJs Video Guide',
          caption: 'CanJs Video Guide'
        }
      ],  
    }
  }


  render() {


    return (
    <div className="App">
      <header>
        <NavbarMenu />
      </header>
      <Container className="main">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/">
              <h1 className="title">Full-Stack Web Developer</h1>
              < About />
              <Gallary images={this.state.images} />
              < ContactForm / >
          </Route>
        </Switch>
      </Container>
      
    </div>
  )
  }
}

export default App;
