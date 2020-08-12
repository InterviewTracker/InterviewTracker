import React, { Component, useState, useEffect } from 'react';

function Interview(props) {
  return (
    <div>
      <p>company: {props.interviews.company_name}</p>
      <p>tech stack: {props.interviews.tech_stack}</p>
      <p>status: {props.interviews.status}</p>
    </div>
  )
}
export default Interview;
