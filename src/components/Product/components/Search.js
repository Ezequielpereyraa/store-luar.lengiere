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
        <input
          type="text"
          onChange={handleChange}
          placeholder="Busca tu Producto"
          value={searchName}
        />
      </div>{' '}
    </div>
  )
}

export default Search
