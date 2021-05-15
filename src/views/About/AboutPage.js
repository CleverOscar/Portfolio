import React from 'react';
import {Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import './about.css';

const AboutPage = () => {
    return(
        <div className="about-page">
            <Row>
                <Col sm="6" md="6" lg="6">
                    <Card>
                        <CardImg src="https://i.ibb.co/NVp2HT7/50089375-2329313003767518-6695293280713703424-n.jpg" /> 
                    </Card>
                </Col>
                <Col sm="6" md="6" lg="6">
                    <Card>
                        <CardTitle className="card-header">Web Developer Skills</CardTitle>
                        <ul>
                            Front-End
                            <li>

                            </li>
                        </ul>

                        <ul>
                            Back-End
                            <li>

                            </li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AboutPage; 