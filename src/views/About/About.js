import React from 'react';

import {Row, Col} from 'reactstrap';

import './about.css';


const About = () => {
    return (<div className="about-container">   
       <Row>
           <Col xs="auto" sm="auto" md="auto" >
             <img src={'https://i.ibb.co/SnDDJ99/45219372-2219308534767966-7383583342043594752-n.jpg'}
             alt='Oscar Self Portriat'/>
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