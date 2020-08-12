import React, { Component, useState, useEffect } from 'react';

function Interview(props) {
  const [didSearch, setDidSearch] = useState(false)
  console.log('search result prop', props.searchedInterviews)
  // useEffect(() => {
  //   if (props.searchedInterviews) {
  //     setDidSearch(true)
  //   }
  // })
  if (props.searchedInterviews) {
    return (
      <div>
        <ul>
          <li>company: {props.searchedInterviews.company_name}</li>
          <li>tech stack: {props.searchedInterviews.tech_stack}</li>
          <li>status: {props.searchedInterviews.status}</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          <li>company: {props.interviews.company_name}</li>
          <li>tech stack: {props.interviews.tech_stack}</li>
          <li>status: {props.interviews.status}</li>
        </ul>
      </div>
    )
  }
}
export default Interview;
