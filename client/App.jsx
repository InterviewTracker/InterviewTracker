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
<<<<<<< HEAD
        <h1>Hello world</h1>
=======
        <h1>Hello world5</h1>
        <button onClick={this.helper}>hello</button>
>>>>>>> e6bc86387a09372f5dfa73d9ad877ca7ae8812d9
        <Profile />
      </div>
    );
  }
}

export default App;
