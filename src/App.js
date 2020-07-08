import React from 'react';
import Header from './views/minor_components/header.js';
import HomePage from './views/home_page.js';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

      <HomePage />
    </div>
  );
}

export default App;
