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
    fetch('/user/addUser', {
      method:'POST',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify({name: 'hamoud', userName: 'whatever', email: 'whatever', password: 'whatever', github:'whatever'}),

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
