import React, { useState } from 'react';
import '../styles/styles.scss'


function Profile () {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [stack, setStack] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [question, setQuestion] = useState('');

  const onSubmit = (data) => {
    console.log(data);
  }
    return (
      <div id="InterviewDiv">

      <h2> Interview Experience </h2>
      <form className='InterviewForm' onSubmit={onSubmit}>

        {/* Company Name  */}
        <label>
          Company Name: 
          <input 
          type='text'
          name='company'
          placeholder='Company'
          onChange={(e) => setCompany(e.target.value)} 
          />
        </label>

        {/* Title  */}
        <br/>
        <br/>
        <label>
          Position Title: 
          <input 
          type="text" 
          name='title'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)} 
          />
        </label>

        {/* Date  */}
        <br/>
        <br/>
        <label>
          Date Submitted: 
          <input 
          type="text" 
          name='date'
          placeholder='Date'
          onChange={(e) => setDate(e.target.value)} 
          />
        </label>

        {/* Status  */}
        <br/>
        <br/>
        <label>
          Status:
            <input type="radio" checked={status === 'Passes'} value="Passes" onChange={() => setStatus('Passes')} />
            Passed
        </label>
        <label>
            <input type="radio" checked={status === 'Failed'} value="Failed" onChange={() => setStatus('Failed')} />
            Failed
        </label>

      {/* Drop Down for Tech Stack */}
      <br/>
      <br/>
        <label>
          Your Tech Stack:
          <select onChange={(e) => setStack(e.target.value)}>
          {/* {<select> */}
            <option value=""> Select </option>
            <option value="frontend">Front-End</option>
            <option value="backend">Back-End</option>
            <option value="fullstack">Full-Stack</option>
            <option value="all">All</option>
          </select>
        </label>

        {/* Question1  */}
        <br/>
        <br/>
        <label>
          Question 1: 
          <input 
          type="text" 
          placeholder='Question'
          onChange={(e) => setQuestion(e.target.value)} 
          />
        </label>

         {/* Question2  */}
         <br/>
        <br/>
        <label>
          Question 2: 
          <input 
          type="text" 
          placeholder='Question'
          onChange={(e) => setQuestion(e.target.value)} 
          />
        </label>

         {/* Question3  */}
         <br/>
        <br/>
        <label>
          Question 3: 
          <input 
          type="text" 
          placeholder='Question'
          onChange={(e) => setQuestion(e.target.value)} 
          />
        </label>

        {/* Check box  */}
        <br/>
        <br/>
        <label>
          More Questions? 
          <input 
          type="checkbox" 
          name='More Questions'
          />
        </label>

        <br/>
        <br/>
        <br/>

        <button type="submit" className="btn submitInterview">
              Submit
        </button>

      </form>
      </div>
  );
}

export default Profile;