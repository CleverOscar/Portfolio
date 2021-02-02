import React from 'react'
import { Component } from 'react'
import { Container } from 'reactstrap';

class AboutMe extends Component {

  constructor(props){
    super (props);
    this.state = {
      script: 'Welcome, my name is Oscar Ortiz!'
    }
  }

  render() {
      return (
          <div className="aboutMe"> 
                <img alt="Profile Oscar" 
                     className="selfie" 
                     src="https://media-exp1.licdn.com/dms/image/C5103AQHV3EbEhHOjaw/profile-displayphoto-shrink_400_400/0/1517567233172?e=1617840000&v=beta&t=iiRvtdOQEkWV_fbY9Hadheb-C2OsBw10jfVumMnKxK0" />                
                
                <hr className="my-2" />
                <p className="lead text-muted">Hello, my name is Oscar Ortiz & I am a Full-Stack Web Dev / Software Engineer </p>

          </div>)
  }
}
 
export default AboutMe
