import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed/Feed.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import { Route, Switch, withRouter, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.helper = this.helper.bind(this);
  }
  helper() {
    console.log('helper');
    fetch('/user/addUser', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: 'hamoud',
        userName: 'whatever',
        email: 'whatever',
        password: 'whatever',
        github: 'whatever',
      }),
    }).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route path='/feed' component={Feed} />
          <Route path='/navbar' component={Navbar} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <button onClick={this.helper}>hello</button>
      </div>
    );
  }
}

export default App;
