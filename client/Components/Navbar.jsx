import React from 'react';
import '../styles/styles.scss'

class Navbar extends React.Component {
    render() {
    return(
     <div>
      <h1> Navbar </h1>
      <button>Feed</button> 
      <button>Profile</button>
      </div>
    );
  }
}

export default Navbar;