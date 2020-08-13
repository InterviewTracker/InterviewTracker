import React, { useState, useEffect } from 'react';
import Login from './Login.jsx';
import Navbar from '../Components/Navbar.jsx';
import Feed from '../Pages/Feed/Feed.jsx';
import Cookies from 'js-cookie';

function Home() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    if(Cookies.get('admin') || Cookies.get('github')) setLogin(true)
    console.log('in useEffect in Home')
    fetch('/user/checkLogin').then(data => data.json()).then(data => {
      console.log('DATA IN HOME: ', data)
      if (data === true) setLogin(true);
    }).catch((error)=>console.log('error: ', error))
  })
  

  if (!isLoggedIn) {
    return <Login setLogin={setLogin}/>;
  } else {
    return <Navbar />;
  }
}
export default Home;
