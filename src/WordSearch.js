import React, { useState } from "react";

export default function WordSearch() {
  const [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(word);
  }

  function updateSearch(event) {
    setWord(event.target.value);
  }
  return (
    <div className="WordSearch">
      <h5>Search for a word</h5>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Word" onChange={updateSearch} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
