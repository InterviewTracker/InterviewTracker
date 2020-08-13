import React, { useState, useEffect, useRef } from "react";
import Interview from "./Interview.jsx";

function Search() {
  const [searchResults, addSearchResults] = useState([]);
  const companyRef = useRef(null);
  const techRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("in search input", companyRef.current.value);
    console.log("tech in search input", techRef.current.value);
    fetch("/content", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        company: companyRef.current.value,
        stack: techRef.current.value,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res", res);
        addSearchResults([...searchResults, ...res]);
      });
  };
  const searchedInterviews = [];
  if (searchResults !== []) {
    let i = 0;
    while (i < searchResults.length) {
      console.log("searchresults i", searchResults[i]);
      searchedInterviews.push(
        <Interview searchedInterviews={searchResults[i]} />
      );
      i++;
    }
  }
  if (searchedInterviews === []) {
    return (
      <form>
        <p> <strong>Company: </strong>
          
          <input ref={companyRef} />
        </p>
        <p> <strong>Tech: </strong>
          
          <input ref={techRef} />
        </p>
        <button onClick={handleSearch} type="submit">
          Search
        </button>
        <br/>
      </form>
    );
  } else {
    return (
      <div>
        <form className="searchBox">
          <p> <strong>Company: </strong>
            
            <input ref={companyRef} />
          </p>
          <p> <strong>Tech Stack: </strong>
            
            <input ref={techRef} />
          </p>
          <button onClick={handleSearch} type="submit">
            Search
          </button>
          <br/>
        </form>
        <div>{searchedInterviews}</div>
        <br/>
      </div>
    );
  }
}
export default Search;
