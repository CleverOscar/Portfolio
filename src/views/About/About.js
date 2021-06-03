import React from 'react';

import {Row, Col} from 'reactstrap';

import './about.css';


const About = () => {
    return (<div className="about-container">   
       <Row>
           <Col xs="auto" sm="auto" md="auto" lg="6" >
            <img src={'https://i.ibb.co/SnDDJ99/45219372-2219308534767966-7383583342043594752-n.jpg'}
             alt='Oscar Self Portriat'/>
           </Col>
           <Col sm="auto" md="auto" lg="6">
                <h3>
                    About Oscar
                </h3>
               <p>
                   What started off as a hobby ended to turn out more than just that. Curious at a young age when myspace was a thing, messing around with html and basic css I thought I was a genius. But then I learned more that there was much more to it than just html and css, little did I know I was going into a new world of code. Now it's been about a decade since I can say I been some what programming. After being a self taught developer for some time, getting connected with people in meetups of chicago, landed my first internship, and then enrolled into Lambda School Bootcamp to touchen up my skills. I believe I have found my true passion in the software world. Building software to help others is something that gives me joy. 
               </p>
           </Col>
       </Row>
    </div>)
}

export default About;