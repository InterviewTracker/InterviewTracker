import React from 'react';
import ReactDOM from 'react-dom'
import '../styles/styles.scss'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      newUsername: '',
      email: '',
      github: '',
      newPassword:'',
      checkNewPass: ''
    }
  }
  render(){
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
              />
              <br />
              <label>Password:  </label>
              <input
                id='password'
                type='password'
                name='password'
                placeholder='Password'
              />
              <br />
              <button type='submit' id='loginButton'>Login</button>
          </form>
        </div>
        <div className="OAuth">

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
            />
            <br />
            <label>Email:  </label>
            <input
              id='email'
              type='text'
              name='email'
              placeholder='Email'
            />
            <br />
            <label>GitHub Username (Optional):  </label>
            <input
              id='githubName'
              type='text'
              name='githubName'
              placeholder='GitHub Username'
            />
            <br />
            <label>Password:  </label>
            <input
              id='newPassword'
              type='password'
              name='newPassword'
              placeholder='Password'
            />
            <br />
            <label>Re-Enter Password:  </label>
            <input
              id='reEnterPassword'
              type='password'
              name='password'
              placeholder='Password'
            />
            <br />
            <button type='submit' id='registerButton'>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login