import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Feed from './Pages/Feed.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Login />
      </div>
    );
  }
}

export default App;
