import React, { useState } from 'react';
import '../styles/styles.scss'
import InterviewForm from '../Components/InterviewForm.jsx'
import Navbar from '../Components/Navbar.jsx';
import { Switch, Link, useRouteMatch, Route } from 'react-router-dom';
import MyFeed from '../Components/MyFeed.jsx';


function Profile () {
  let { path, url } = useRouteMatch();
  return ( 
    <div >
      <div className='myProfile'>
        <Link to={`${url}/interviews`}>
        <li>My Interviews</li>
      </Link>
      <Link to={`${url}/form`}>
        <li>Interview Form</li>
      </Link>
      </div>
      
       <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/form`}>
          <InterviewForm />
        </Route>
        <Route path={`${path}/interviews`}>
          <MyFeed />
        </Route>
        </Switch>
    </div>
  )
}

export default Profile;