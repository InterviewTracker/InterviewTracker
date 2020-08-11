import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss'


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          company: '',
          interview: '',
          date: '',
          status: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Profile;