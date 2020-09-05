import React, { useState, ReactComponent } from 'react'
import {Row, Col} from 'reactstrap';
import './projects.css'

function Projects(){
    return (
        <div> 
            <Row xs="1" sm="3">
                < Col className = "showcase" > 
                    Tinder Carousel Guide 
                    < img className="gallary" src="https://i.imgur.com/Pg6091Z.png"/> 
                </Col>
                <Col className="showcase">
                    Video Player Guide
                    < img className="gallary" src="https://i.imgur.com/4Mt3r7l.png" />
                </Col>
                <Col className="showcase">
                    Neighborhood Chef
                    <img className="gallary" src="https://i.imgur.com/jIyYPST.png" />
                </Col>
            </Row>
        </div>
    )
}

export default Projects; 