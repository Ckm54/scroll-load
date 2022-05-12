import React, { useState, useRef, useCallback } from "react"
import './App.css';
import UseBookSearch from './UseBookSearch';

function App() {
  const [query, setQuery] = useState('t')
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()
  const lastBookElement = useCallback(node => {
    console.log(node)
  })

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
      {books.map((book, index) => {
        if(books.length === index + 1){
          return <div ref={lastBookElement} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && "Loading....."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
