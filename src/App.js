import React from 'react';
import Header from './views/header_component/header.js';
import HomePage from './views/home_component/home_page.js';
import AboutMe from './views/about_component/about.js'
import Footer from './views/footer/footer.js';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap'

function App() {
return (
  <div className="App"> 
     <header>
      <Header/>
    </header>
    <Container className="body-container" fluid={true} >
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path='/'>
        <AboutMe />
      </Route>
    </Switch>
    <Footer />
   </Container>
  </div>
);
}

export default App;
