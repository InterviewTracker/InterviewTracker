import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss'


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          company: '',
          title: '',
          stack: '',
          date: '',
          status: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="Interview">

      <h2> Interview Experience </h2>
      <form onSubmit={this.handleSubmit}>

        {/* Company Name  */}
        <label>
          Company Name: 
          <input type="text" value={this.state.company} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        {/* Title  */}
        <br/>
        <label>
          Position Title: 
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        {/* Status  */}
        <br/>
        <label>
          Status: 
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      {/* Drop Down for Tech Stack */}
      <br/>
        <label>
          Your Tech Stack:
          {/* <select value='Select' onChange={this.handleChange}> */}
          <select>
            <option value=""> Select </option>
            <option value="frontend">Front-End</option>
            <option value="backend">Back-End</option>
            <option value="fullstack">Full-Stack</option>
            <option value="all">All</option>
          </select>
        </label>
        <input type="submit" value="Submit" />

        {/* Questions  */}
        <br/>
        <label>
          Questions: 
          <input type="text" value={this.state.questions} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}

export default Profile;