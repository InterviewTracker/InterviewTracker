import React, { useState, useEffect } from "react";
import Interview from "./Interview.jsx";
import Search from "./Search.jsx";
import "../../styles/styles.scss";

function Feed() {
  const [interviewsFromDb, setInterviews] = useState([]);
  
  useEffect(() => {
    fetch("/content/allContent")
      .then((data) => data.json())
      .then((res) => {
        console.log("res", res);
        setInterviews([...interviewsFromDb, ...res]);
      });
  }, []);
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
export default Feed;
