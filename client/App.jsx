import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed.jsx';

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
        <h1>Hello world5</h1>
        <button onClick={this.helper}>hello</button>
        <Profile />
      </div>
    );
  }
}

export default App;
