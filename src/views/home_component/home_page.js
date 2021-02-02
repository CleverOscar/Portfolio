import React from 'react';
import './home.css'
import { Container } from 'reactstrap'
import Projects from '../projects/projects.js';
import AboutMe from '../about_component/about.js';

function HomePage(){
  return (
    <div className="home_container">
      
        <AboutMe />
        {/* <Projects/> */}
      
    </div>
  )
}

export default HomePage
