import React from 'react';

import {Row, Col, Form, Button, FormGroup, Label, Input} from 'reactstrap';


const ContactForm =  (props) => (
    <div className="contact_form">
        <h3 className="contact_title">Contact Form</h3> 
        <Form>
        <FormGroup>
            <Col>
                <Label>
                    Full Name:
                </Label>
            </Col>
            <Input type="text" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
            <Col>
                <Label>
                    Email: 
                </Label>
            </Col>
            <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
    </div>
)

export default ContactForm;