import React from 'react'
import { Row, Col} from 'reactstrap';
import './projects.css'

function Projects(){
    return (
        <div> 
            <Row xs='1' sm='1' md='3'>
                <Col> 
                    <h4> Tinder Carousel Guide  </h4>
                    < img className="gallary" src="https://i.imgur.com/Pg6091Z.png" alt=" Tinder Carousel Guide / Learn to build a Tinder like Carousel" /> 
                </Col>
                <Col>
                    <h4> Video Player Guide </h4>
                    < img className="gallary" src="https://i.imgur.com/4Mt3r7l.png" alt=" Video Player Guide / Learn to build your own custom video player" />
                </Col>
                <Col>
                    <h4> Neighborhood Chef </h4>
                    <img className="gallary" src="https://i.imgur.com/jIyYPST.png" alt="Neighborhood Chef / Check out your local chefs in your neighborhood" />
                </Col>
            </Row>
        </div>
    )
}

export default Projects; 