import React, { Component } from 'react';

import { Col, Form, Button, FormGroup, Input } from 'reactstrap';
import './contact.css';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return ( <
            div className = "contact_form" >
            <
            h3 className = "contact_title" > Contact Form < /h3>  <
            Form >
            <
            FormGroup >
            <
            Col >
            <
            Input type = "text"
            placeholder = "Full Name" / >
            <
            /Col> < /
            FormGroup > <
            FormGroup >
            <
            Col >
            <
            Input type = "email"
            placeholder = "Email" / >
            <
            /Col>         < /
            FormGroup > <
            FormGroup >
            <
            Col >
            <
            Input type = "textarea"
            name = "text"
            id = "exampleText" / >
            <
            /Col> < /
            FormGroup > <
            Col >
            <
            Button > Submit < /Button> < /
            Col > <
            /Form> < /
            div >
        )
    }
}

export default ContactForm;