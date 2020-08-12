import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Feed from '../Pages/Feed/Feed.jsx';
import Profile from '../Pages/Profile.jsx'

function Navbar() {
  return (
    <nav>
      <Link to='/feed'>
        <li>Feed</li>
      </Link>
      <Link to='/profile'>
        <li>Profile</li>
      </Link>
    </nav>
  );
}
export default Navbar;
