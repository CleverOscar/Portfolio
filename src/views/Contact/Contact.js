import React from 'react';

import {Row, Col, Form, Button, FormGroup, Label, Input} from 'reactstrap';


const ContactForm =  (props) => (
    <div className="contact_form">
        <h3 className="contact_header">Contact Form</h3>

        <Form>
            <FormGroup>
                <Label>
                    Full Name
                </Label>
                <Input type="text" placeholder="Full Name" />
            </FormGroup>
        </Form>

    </div>
)

export default ContactForm;