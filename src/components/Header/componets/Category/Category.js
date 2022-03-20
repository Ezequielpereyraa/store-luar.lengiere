import './styles.scss'

import React from 'react'

const Category = ({ category, setSelectedCategory, selectedCategory }) => {
  const handleChange = (e) => {
    const { checked, name, value } = e.target

    if (!selectedCategory.includes(name)) {
      setSelectedCategory([...selectedCategory, name])
    } else {
      setSelectedCategory([...selectedCategory])
    }
    if (!checked) {
      // si no esta checkeado, filtramos los que son distinos para que no haya categorias repetidas
      setSelectedCategory(
        selectedCategory.filter((category) => category !== value)
      )

      setSelectedCategory(
        selectedCategory.filter((category) => category !== value)
      )
    }
  }

  return (
    <div className="categoryContainer">
      <label
        className={
          selectedCategory.includes(category)
            ? 'categoryFilter__label activo'
            : 'categoryFilter__label'
        }
        htmlFor={category}
      >
        {category}
      </label>
      <input
        className="categoryFilter"
        id={category}
        name={category.trim()}
        type="checkbox"
        value={category.trim()}
        onChange={handleChange}
      />
    </div>
  )
}

export default Category
