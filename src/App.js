import React from 'react';
import Header from './views/header_component/header.js';
import HomePage from './views/home_component/home_page.js';
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
      <Route path='/'>
        <AboutMe />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
