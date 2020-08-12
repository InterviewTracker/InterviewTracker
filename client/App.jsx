import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import InterviewForm from './Components/InterviewForm.jsx';
import Feed from './Pages/Feed/Feed.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Search from './Pages/Feed/Search.jsx'

import { Route, Switch, withRouter, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.helper = this.helper.bind(this);
  }
  helper() {
    console.log('helper');
    fetch('/content/editContent', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ company: 'spaceX', full_stack: 'true' }),
    }).then((data) => {
    //   console.log(data);
    });
  }

  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route path='/feed' component={Feed} />
          {/* component = privateRoute in PrivatRoute.jsx isLoggedIn will be in props */}
          {/* <Route path='/navbar' component={Navbar} /> */}
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
