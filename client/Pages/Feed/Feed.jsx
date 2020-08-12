import React, { useState, useEffect } from 'react';
import Interview from './Interview.jsx';
import Search from './Search.jsx';

function Feed() {
  const [interviewsFromDb, setInterviews] = useState([]);
  useEffect(() => {
    fetch('/user/userFeed').then(data => data.json()).then(res => {
      console.log('res', res)
      for (let interview of res.data) {
        console.log(interview)
        setInterviews([...interviewsFromDb, interview]);
      };
    })
  }, []);
  // const data = [
  //   { id: 1, company: 'google' },
  //   { id: 2, company: 'amazon' },
  //   { id: 3, company: 'kmart' },
  // ];
  const interviews = [];
  if (interviewsFromDb !== []) {
    let i = 0;
    while (i < interviewsFromDb.length) {
      interviews.push(<Interview interviews={interviewsFromDb[i]} />);
      i++;
    }
  }
  if (interviews !== []) {
    return (
      <div>
        <Search />
        {interviews}
      </div>
    )
  } else {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
export default Feed;
