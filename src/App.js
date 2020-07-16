import React from 'react';
import Header from './views/minor_components/header.js';
import HomePage from './views/home_page.js';
import AboutMe from './views/minor_components/about.js'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path='/about'>
        <AboutMe />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
