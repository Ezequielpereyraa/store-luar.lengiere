/* eslint-disable react/prop-types */
import React from 'react'

const Search = ({ setSearchName, searchName }) => {
  const handleChange = (e) => {
    const {
      target: { value }
    } = e
    setSearchName(value)
  }
  return (
    <div>
      <div className="inputContainer">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Busca tu Producto"
          value={searchName}
        />
      </div>
    </div>
  )
}

export default Search
