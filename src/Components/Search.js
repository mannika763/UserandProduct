import './Search.css'
import React from 'react'

export default function Search({search, setSearch, handleSearch, fetchData}) {
  return (
    <div>
        <div className="search-container">
                  <input onChange={(e) => setSearch(e.target.value)} value={search} />
                  <button className="button-25" onClick={handleSearch}>
                    Search
                  </button>
                  <button className="button-25" onClick={fetchData}>
                    Reset
                  </button>{" "}
                </div>
    </div>
  )
}
