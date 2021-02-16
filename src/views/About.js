import React from 'react';

import {Row, Col} from 'reactstrap';

import './about.css';


const About = () => {
    return (<div className="about-container">   
       <Row>
           <Col xs="auto" md="6">
             < img src = {
                 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/45219372_2219308534767966_7383583342043594752_o.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=J6ibzjKJLucAX-bgaDn&_nc_ht=scontent-ort2-2.xx&oh=d35034c89cc43596948409d9a11e9715&oe=6050BF97'
             }
             alt = 'Oscar Self Portriat' /
                 >
           </Col>
           <Col md="6">
                <h3>
                    About Me
                </h3>
               <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
               </p>
           </Col>
       </Row>
    </div>)
}

export default About;