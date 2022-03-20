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
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
        <input
          placeholder="Busca tu Producto"
          type="text"
          value={searchName}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Search
