import './App.scss'
import React, { useState } from 'react'

import Header from './components/Header'
import ProductList from './components/ProductList'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState([])

  return (
    <div>
      <Header
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  )
}

export default App
