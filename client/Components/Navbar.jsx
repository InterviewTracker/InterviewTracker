import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/feed'>
        <li>Feed</li>
      </Link>
    </nav>
  );
}
export default Navbar;
