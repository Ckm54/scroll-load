import React, { useState } from "react"
import './App.css';
import UseBookSearch from './UseBookSearch';

function App() {
  const [query, setQuery] = useState('t')
  const [pageNumber, setPageNumber] = useState(1)
  UseBookSearch(query, pageNumber)

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  return (
    <>
      <input type="text" onChange={handleSearch}/>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading.....</div>
      <div>Error</div>
    </>
  );
}

export default App;
