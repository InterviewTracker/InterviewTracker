import React, { Component, useState, useEffect } from 'react';
import Interview from './Interview.jsx';

function Feed() {
  const [interviews, setInterviews] = useState([]);
  // useEffect(() => {
  //   fetch('localhost:3000/feed')
  //     .then((data) => {
  //       data.json();
  //     })
  //     .then((res) => {
  //       for (let interview of res) {
  //         setInterviews(interviews.push(<Interview interviews={interviews} />));
  //       }
  //     });
  // });
  useEffect(() => {
    setInterviews(
      interviews.concat(<Interview interviews={{ company: 'google' }} />)
    );
  });
  return (
    <div>
      <p>{interviews}</p>
    </div>
  );
}
export default Feed;
