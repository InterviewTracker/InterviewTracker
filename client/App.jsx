import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed/Feed.jsx';
import Navbar from './Components/Navbar.jsx';
import { Route, Switch, withRouter, Link } from 'react-router-dom';

class App extends React.Component {
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
        <Profile />
      </div>
    );
  }
}

export default App;
