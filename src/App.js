import React, { useState, useRef, useCallback } from "react"
import './App.css';
import UseBookSearch from './UseBookSearch';

function App() {
  const [query, setQuery] = useState('t')
  const [pageNumber, setPageNumber] = useState(1)

  const{books,
    hasMore,
    loading,
    error } = UseBookSearch(query, pageNumber)

  const observer = useRef()

  const lastBookElementRef = useCallback(node => {
    /// set up intersection observer

    // // check if loading just return as when loading we dont want to trigger api call
    if(loading) return
    // disconnect observer from previous element so the last one can be hooked correctly
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])
  

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  return (
    <>
      <input type="text" value={query} onChange={handleSearch}/>
      {books.map((book, index) => {
        if(books.length === index + 1){
          return <div ref={lastBookElementRef} key={book}>{book}</div>
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
