import React, { Component, useState, useEffect } from 'react';

function Interview(props) {
  console.log(props.interviews);
  return <div>company: {props.interviews.company}</div>;
}
export default Interview;
