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
                        <Label>Full Name</Label>
                        <Input placeholder="Full Name"/>
                    </FormGroup>
                </Col>
                <Col md={3} />
            </Row>
        </Form>

    </div>
)

export default ContactForm;