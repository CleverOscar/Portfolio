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
                            <a href="https://www.linkedin.com/in/clever-oscar/" target="_blank"> LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CleverOscarDev" target="_blank">Twitter</a>
                        </li>
                        <li>
                            <a href="https://github.com/CleverOscar" target="_blank">Github`</a>
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