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
<<<<<<< HEAD
        <Navbar />
        {/* path = '/' - main paige 
        {/* '/signin' */}
        {/* <Login /> */}
        {/* '/profile' */}
        {/* <Profile /> */}
        {/* '/feed' */}
        {/* <Feed />*/}
        <h1>Hell World</h1>
        <Switch>
          <Route path='/feed' component={Feed} />
        </Switch>
=======
        <h1>Hello world5</h1>
        <Profile />
>>>>>>> db500231fbeb4340f0400e56f48d0911938f401e
      </div>
    );
  }
}
<<<<<<< HEAD
export default withRouter(App);
=======

export default App;
>>>>>>> db500231fbeb4340f0400e56f48d0911938f401e
