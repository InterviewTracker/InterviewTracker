import React, { useState, useEffect, useRef } from 'react';

function Search() {
  const [searchResults, addSearchResults] = useState([])
  const companyRef = useRef(null);
  const techRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('in search input', companyRef.current.value);
    console.log('tech in search input', techRef.current.value);
    fetch('/content', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        company: companyRef.current.value,
        stack: techRef.current.value,
      }),
    }).then((data) => data.json()).then(res => addSearchResults([...searchResults, ...res.data]))
  }
  const searchedInterviews = [];
  let i = 0;
  while (i < searchResults.length) {
    interviews.push(<Interview searchedInterviews={searchResults[i]} />);
    i++;
  }
  return (
    <div>
      <form >
        company
      <input ref={companyRef} />
      tech
      <input ref={techRef} />
        <button onClick={handleSearch} type='submit'>submit</button>
      </form >
      <div>
        {searchedInterviews}
      </div>
    </div>
  )
};
export default Search;
