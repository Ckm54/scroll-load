import React, { useState } from "react"
import './App.css';
import UseBookSearch from './UseBookSearch';

function App() {
  const [query, setQuery] = useState('t')
  const [pageNumber, setPageNumber] = useState(1)
  const{books,
        hasMore,
        loading,
        error } = UseBookSearch(query, pageNumber)

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  return (
    <>
      <input type="text" value={query} onChange={handleSearch}/>
      {books.map(book => <div key={book}>{book}</div>)}
      <div>{loading && "Loading....."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
