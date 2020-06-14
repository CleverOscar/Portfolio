import React from 'react'

export default class Navbar extends React.Component {
  constructor(props){
    super (props)

  }

  render() {

    const navbar = {
      type: 'h1',
      props: {
        className: 'navbar_container',
        children: 'Navbar Element',
      }
    }

    return <div>
            {navbar.children}
           </div>
  }
}
