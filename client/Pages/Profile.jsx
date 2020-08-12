import React, { useState } from 'react';
import '../styles/styles.scss'
import InterviewForm from '../Components/InterviewForm.jsx'
import Navbar from '../Components/Navbar.jsx';


function Profile () {
  return ( 
    <div>   
      <Navbar/>
      <h2>Interview Experience</h2>
      <InterviewForm />
    </div>

  )
}

export default Profile;