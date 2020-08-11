import React, { useState, useEffect } from 'react';
import Interview from './Interview.jsx';
import Search from './Search.jsx';

function Feed() {
  const [interviewsFromDb, setInterviews] = useState([]);
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
  const data = [
    { id: 1, company: 'google' },
    { id: 2, company: 'amazon' },
    { id: 3, company: 'kmart' },
  ];
  useEffect(() => {
    setInterviews([...interviewsFromDb, ...data]);
  }, []);
  const interviews = [];
  let i = 0;
  while (i < interviewsFromDb.length) {
    interviews.push(<Interview interviews={interviewsFromDb[i]} />);
    i++;
  }
  return (
    <div>
      <Search />
      {interviews}
    </div>
  );
}
export default Feed;
