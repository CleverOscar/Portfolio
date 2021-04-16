import React from 'react';

import {Row, Col} from 'reactstrap';

import './about.css';


const About = () => {
    return (<div className="about-container">   
       <Row>
           <Col xs="auto" sm="auto" md="auto" >
             < img src = {
                 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/35686839_2000045286694293_6539718802064539648_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=MWS178PdUCwAX_KwzfG&_nc_ht=scontent-ort2-2.xx&oh=71b061bf46af60053af18ad8beeb98bd&oe=607DA1AF'
             }
             alt = 'Oscar Self Portriat' /
                 >
           </Col>
           <Col sm="auto" md="auto">
                <h3>
                    About Oscar
                </h3>
               <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               </p>
           </Col>
       </Row>
    </div>)
}

export default About;