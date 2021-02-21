import React from 'react';

import {Row, Col, Form, Button, FormGroup, Label, Input} from 'reactstrap';

import {} from 'reactstrap';

const ContactForm =  (props) => (
    <div className="contact_form">
        <h3 className="contact_header">Contact Form</h3>

        <Form>
            <Row form>
                <Col md={3} />
                <Col md={6}>
                    <FormGroup>
                        <Label 
                            for="name"> 
                                Full Name
                         </Label>
                        <Input 
                            type="text"
                             placeholder="Full Name"/>
                    </FormGroup>
                </Col>
                <Col md={3} />
            </Row>
            <Row>
                <Col col={6} >
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type="number" placeholder="phone number" />
                    </FormGroup>
                </Col>
            </Row>

            <Button>Submit</Button>
        </Form>

    </div>
)

export default ContactForm;