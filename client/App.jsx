import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed/Feed.jsx';
import Navbar from './Components/Navbar.jsx';
import { Route, Switch, withRouter, Link } from 'react-router-dom';

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
        <Navbar />
        {/* path = '/' - main paige 
        {/* '/signin' */}
        {/* <Login /> */}
        {/* '/profile' */}
        {/* <Profile /> */}
        {/* '/feed' */}
        {/* <Feed />*/}
        <Switch>
          <Route path='/feed' component={Feed} />
        </Switch>
        <h1>Hello world5</h1>
        <button onClick={this.helper}>hello</button>
        <Profile />
      </div>
    );
  }
}

export default App;
