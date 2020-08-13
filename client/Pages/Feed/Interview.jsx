import React, { Component, useState, useEffect } from "react";
import "../../styles/styles.scss";

function Interview(props) {
  const [didSearch, setDidSearch] = useState(false);
  console.log("search result prop", props.searchedInterviews);
  // useEffect(() => {
  //   if (props.searchedInterviews) {
  //     setDidSearch(true)
  //   }
  // })
  const addAnswer = (e)=>{
    e.preventDefault()
    let ids = e.currentTarget.id
    const list = document.getElementById('post-'+ids)
    let answer = list.value
    ids=ids.split('-')
    console.log(props.interviews)
    // if(props.interviews.id==ids[0]){
      let add = JSON.parse(JSON.stringify((props.interviews)))
      
      let questions = JSON.parse(add.questions)
      questions[ids[1]].push(answer)
      add.questions=questions
      console.log(add)
        fetch('/content/editContent', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({...add}),
        }).then(res => console.log('hihih'))
        .catch((err) => {
          console.log('helllo');
        })
      // }
  }
  if (props.searchedInterviews) {
    const questions = JSON.parse(
      props.searchedInterviews.questions
    ).map((question) => <li>{question}</li>);
    return (
      <div className="companies">
        <ul className="company-info">
          <li>Company: {props.searchedInterviews.company_name}</li>
          <li>Tech stack: {props.searchedInterviews.tech_stack}</li>
          <li>
            <strong>Questions: </strong>
            <ul className="questions">{questions}</ul>
          </li>
          <li>Status: {props.searchedInterviews.status}</li>
        </ul>
      </div>
    );
  } else {
    const questions = JSON.parse(props.interviews.questions).map((question,i) => (
      <li className="question"  type="submit" >
        {question.map((que,i) => (i==0)? <li>Questions: {que}</li>:<li>Answer: {que}</li> )}
        <input className="answer" style={props.feed?{display:'none'}:{}} id={`post-${props.interviews.id}-${i}` }></input>
        <button className="answer-btn" id={`${props.interviews.id}-${i}`} style={props.feed?{display:'none'}:{}} onClick={addAnswer} >
          Add Answer
        </button>
      </li>
    )).reverse();
    return (
      <div className="companies">
        <ul className="company-info">
          <li>
            <strong>Company:</strong> {props.interviews.company_name}
          </li>
          <li>
            <strong>Tech Stack:</strong> {props.interviews.tech_stack}
          </li>
          <li>
            <strong>Questions: </strong>
            <ul className="questions">{questions}</ul>
          </li>
          <li>
            <strong>Status: </strong>
            <span
              style={
                props.interviews.status === "Passed"
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {props.interviews.status}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Interview;
