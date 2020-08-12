import React, { useState, useEffect } from 'react';
import Login from './Login.jsx';
import Navbar from '../Components/Navbar.jsx';
import Feed from '../Pages/Feed/Feed.jsx';

function Home() {
  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {
    fetch('/user/checkLogin')
    .then(data => data.json())
    .then(data => {
      if (data === true) setLogin(true);
    })
  }, [])
  

  if (!isLoggedIn) {
    return <Login />;
  } else {
    return <Navbar />;
  }
}
export default Home;
