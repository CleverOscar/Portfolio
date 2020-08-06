import React, { useState } from 'react';
import './home.css'
import {Container, Row, Col} from 'reactstrap'

function HomePage(){
  return (
    <div className="home_container">
      <Container>
        <div>
          <h1>Full Stack Developer & Software Engineer</h1>
        </div>
        <Row>
        <Col>
          <img src="https://media-exp1.licdn.com/dms/image/C5103AQHV3EbEhHOjaw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=XDtIKMn0jhBC7G3b6oFFlYCnkCcKJu-ps1xEwjEb_0s" />
        </Col>
        <Col>
           Hello, my name is Oscar Ortiz!
          And I am a Full - Stack Web Developer and Software Engineer.
          Sounds fancy but with all honesty, I still have much to learn,
          I am very eager to
          get started on everything else.
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
