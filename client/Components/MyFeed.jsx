import React, { useState, useEffect } from "react";
import Interview from "../Pages/Feed/Interview.jsx";
import "../styles/styles.scss";

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
      interviews.push(<Interview key={i} interviews={interviewsFromDb[i]} />);
      i++;
    }
  }
  return <div>{interviews}</div>;
}

export default MyFeed;
