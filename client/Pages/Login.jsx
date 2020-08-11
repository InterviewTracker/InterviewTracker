// import React from 'react';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/styles.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [email, setEmail] = useState('')
  const [github, setGithub] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkNewPass, setCheckNewPass] = useState('')
  console.log('PASSWORD: ', password)
  return(
    <div className='MainDiv'>
      <div className='Login'>
        <form className='LoginForm'>
            <h4>Login</h4>
            <label>Username:  </label>
            <input
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password:  </label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit' id='loginButton'>Login</button>
        </form>
      </div>
      <div className="OAuth">
        <a href="https://github.com/login/oauth/authroize?client_id=c9608cb1875cd40998af">Sign in with GitHub</a>
      </div>
      <div className='Register'>
        <form className='RegisterForm'>
          <h4>Register</h4>
          <label>Username:  </label>
          <input 
            id='newUsername'
            type='text'
            name='newUsername'
            placeholder='Username'
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <br />
          <label>Email:  </label>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>GitHub Username (Optional):  </label>
          <input
            id='githubName'
            type='text'
            name='githubName'
            placeholder='GitHub Username'
            onChange={(e) => setGithub(e.target.value)}
          />
          <br />
          <label>Password:  </label>
          <input
            id='newPassword'
            type='password'
            name='newPassword'
            placeholder='Password'
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <label>Re-Enter Password:  </label>
          <input
            id='reEnterPassword'
            type='password'
            name='password'
            placeholder='Password'
            onChange={(e) => setCheckNewPass(e.target.value)}
          />
          <br />
          <button type='submit' id='registerButton'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}


export default Login