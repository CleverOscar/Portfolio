import React from 'react';
import './Footer.css';


const Footer = (props) => (
    <div className='footer_component'>
        <div className="footer-content">
            <h4>Social</h4>
            <h4>Links</h4>
        </div>

        <div className="footer-content">
            <div className="links">
                    <ul>
                        <li>
                            LinkedIn
                        </li>
                        <li>
                            Twitter
                        </li>
                        <li>
                            GitHub
                        </li>
                    </ul>
                </div>

                <div className="links">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Projects
                        </li>
                    </ul>
                </div>
        </div>
            
        
             
    </div>
)

export default Footer;