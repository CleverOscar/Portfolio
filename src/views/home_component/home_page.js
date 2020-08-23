import React, { useState } from 'react';
import './home.css'
import {Container, Row, Col} from 'reactstrap'
import Projects from '../projects/projects.js';
import AboutMe from '../minor_components/about.js';

function HomePage(){
  return (
    <div>
      <Container className="home_container">
        
        <AboutMe />

        <Projects/>
      </Container>
    </div>
  )
}

export default HomePage
