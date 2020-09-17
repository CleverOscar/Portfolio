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

  componentDidMount(){

  }

  componentWillUnmount() {

  }

  // typeWriter() {
  //   var i = 0;
  //   var sentence = 'Welcome, my name is Oscar Ortiz';
  //   var speed = 50;
  // }

  render() {
      return (
          <div> 
              <Container> 
                <img alt="Profile Oscar" 
                     className="selfie" 
                     src="https://media-exp1.licdn.com/dms/image/C5103AQHV3EbEhHOjaw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=XDtIKMn0jhBC7G3b6oFFlYCnkCcKJu-ps1xEwjEb_0s" />                
                
                <hr className="my-2" />
                <p className="lead text-muted">Hello world, I'm Oscar Ortiz & I am a Full-Stack Web Dev / Software Engineer </p>
              </Container>

          </div>)
  }
}
 
export default AboutMe
