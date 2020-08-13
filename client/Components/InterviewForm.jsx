import React, { useState } from 'react';
import '../styles/styles.scss'


function InterviewForm () {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [stack, setStack] = useState('');
  const [status, setStatus] = useState('');
  // console.log(company);
  
  const onSubmit = () => {
    const list = document.getElementsByClassName('question');
    const questions = [];
    for(let question of list){
      questions.push([question.value]);
    }
    // console.log(questions);

    fetch('/content/addContent', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({company, title, stack, status, questions}),
    })
    .then((data) => {
      // console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
    return (
      <div id="InterviewDiv">
        
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

        {/* Status  */}
        <br/>
        <br/>
        <label>
          Status:
            <input type="radio" checked={status === 'Passed'} value="Passed" onChange={() => setStatus('Passed')} />
            Passed
        </label>
        <label>
            <input type="radio" checked={status === 'Failed'} value="Failed" onChange={() => setStatus('Failed')} />
            Pending
        </label>
        <label>
            <input type="radio" checked={status === 'Pending'} value="Pending" onChange={() => setStatus('Pending')} />
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
            <option value="frontend">FrontEnd</option>
            <option value="backend">BackEnd</option>
            <option value="fullstack">FullStack</option>
            <option value="all">All</option>
          </select>
        </label>

        {/* Question1  */}
        <br/>
        <br/>
        <label>
          Question 1: 
          <input 
          className='question'
          type="text" 
          placeholder='Question'
          />
        </label>

         {/* Question2  */}
         <br/>
        <br/>
        <label>
          Question 2: 
          <input 
          className='question'
          type="text" 
          placeholder='Question'
          />
        </label>

         {/* Question3  */}
         <br/>
        <br/>
        <label>
          Question 3: 
          <input 
          className='question'
          type="text" 
          placeholder='Question'
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

export default InterviewForm;