import React, { useState, useEffect } from 'react';

function Search() {
  const inputEl = useRef(null);
  return (
    <form>
      search
      <input ref={inputEl} />
    </form>
  );
}
export default Search;
