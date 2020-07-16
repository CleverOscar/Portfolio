import React, {useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';


function Navbar(){


    return <div className="navbar">
            <ul>
              <li>
                OPO
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
           </div>
}

export default Navbar
