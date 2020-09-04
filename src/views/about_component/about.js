import React from 'react'
import {Row, Col} from 'reactstrap'

function AboutMe() {

  return (
          <div> 
            <h1 className="header">Full Stack Developer & Software Engineer</h1>
            <Row xs="1" sm="1"  className="bio">
             <Col  >
              <img className="selfie" src="https://media-exp1.licdn.com/dms/image/C5103AQHV3EbEhHOjaw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=XDtIKMn0jhBC7G3b6oFFlYCnkCcKJu-ps1xEwjEb_0s" />
              <h2 id='typeWriter'> 
                Type Writer Fucntion here
              </h2>
             </Col>
           </Row>
          </div>)
           
}

export default AboutMe
