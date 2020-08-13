import React, { useState, useEffect } from "react";
import Interview from "../Pages/Feed/Interview.jsx";
import "../styles/styles.scss";
import Cookies from 'js-cookie';

function MyFeed() {
  const [interviewsFromDb, setInterviews] = useState([]);
  useEffect(() => {
    fetch("/user/userFeed")
      .then((data) => data.json())
      .then((res) => {
        console.log("res", res);
        setInterviews([...interviewsFromDb, ...res]);
      });
  }, []);
  // const data = [
  //   { id: 1, company: 'google' },
  //   { id: 2, company: 'amazon' },
  //   { id: 3, company: 'kmart' },
  // ];
  const interviews = [];
  if (interviewsFromDb !== []) {
    let i = 0;
    console.log("interviews from db", interviewsFromDb);
    while (i < interviewsFromDb.length) {
      if(interviewsFromDb[i].github_name === Cookies.get('gitHub')){
        interviews.push(<Interview key={i} answers={true} interviews={interviewsFromDb[i]} />);
        
      }
      i++;
    }
  }
  return <div className="myInterviews">{interviews}</div>;
}

export default MyFeed;
