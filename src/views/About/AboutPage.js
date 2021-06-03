import React from 'react';
import {Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap';

import './about.css';

const AboutPage = () => {
    return(
        <div className="about-page">
            <Row>
                <Col sm="6" md="6" lg="4">
                    <Card>
                        <CardImg src="https://i.ibb.co/NVp2HT7/50089375-2329313003767518-6695293280713703424-n.jpg" /> 
                    </Card>
                </Col>
                <Col sm="6" md="6" lg="4">
                    <Card>
                        <CardTitle className="card-header">Web Developer Skills</CardTitle>
                        <CardBody>
                            <Col lg="12">
                                <ul>
                                    <li>
                                        HTML / CSS
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        SPA (Single Page Applications)
                                    </li>
                                    <li>
                                        ReactJs (reactstrap, bootstrap, etc)
                                    </li>
                                    <li>
                                        CanJs
                                    </li>
                                    <li>
                                        React-Router-Dom
                                    </li>
                                    <li>
                                        Redux
                                    </li>
                                </ul>
                            </Col>

                            <Col lg="12">
                                <ul>
                                    <li>
                                        NodeJs
                                    </li>
                                    <li>
                                        ExpressJs
                                    </li>
                                    <li>
                                        CRUD
                                    </li>
                                    <li>
                                        API's
                                    </li>
                                </ul>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" md="6" lg="4">
                    <Card>
                        <CardTitle className="card-header">Software / Platforms</CardTitle>
                        <CardBody>
                            <Col lg="12">
                                <ul>
                                    <li>
                                        Github (version control and source code)
                                    </li>
                                    <li>
                                        Netlify / Heroku
                                    </li>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        SPA (Single Page Applications)
                                    </li>
                                    <li>
                                        ReactJs (reactstrap, bootstrap, etc)
                                    </li>
                                    <li>
                                        CanJs
                                    </li>
                                    <li>
                                        Postman
                                    </li>
                                    <li>
                                        Google Domains(domain name registrar)
                                    </li>
                                </ul>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AboutPage; 