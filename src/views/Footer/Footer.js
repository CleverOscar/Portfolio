import React from 'react';
import './Footer.css';

import ContactForm from './Contact/Contact.js'

const Footer = (props) => (
    <div className='footer_component'>
        <div className="upperFooter">
            <ContactForm />
        </div>
        <div className="bottomFooter">

        </div>
    </div>
)

export default Footer;