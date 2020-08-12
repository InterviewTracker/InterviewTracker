import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed.jsx';
import Navbar from './Components/Navbar.jsx'

class App extends React.Component {
  constructor(){
    super()
    this.helper = this.helper.bind(this);
  }
  helper(){
    console.log('helper')
    fetch('/content/editContent', {
      method:'POST',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify({company: 'spaceX', full_stack: 'true'}),
    })
    .then((data) => {
      console.log(data);
    })
  }


  render() {
    return (
      <div>
        <h1>Interview Tracker</h1>
        {/* <button onClick={this.helper}>hello</button> */}
        {/* <Navbar /> */}
        <Profile />
      </div>
    );
  }
}

export default App;
