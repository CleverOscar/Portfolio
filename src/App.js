import React from 'react';
import Header from './views/header_component/header.js';
import HomePage from './views/home_component/home_page.js';
import AboutMe from './views/about_component/about.js'
import Footer from './views/footer/footer.js';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap'
import AboutPage from './views/about_component/AboutMePage.js';

function App() {
return (
  <div className="App"> 
     <header>
      <Header/>
    </header>
    <Container className="body-container"  >
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path='/AboutMe'>
        <AboutPage />
      </Route>
    </Switch>
   </Container>
  </div>
);
}

export default App;
