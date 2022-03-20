import './App.scss'
import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import ProductList from './components/ProductList'
import ModalWellcome from './components/ModalWellcome/ModalWellcome'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  const [openModal, setOpenModal] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(false)
    }, 5000)
  }, [])

  return (
    <div>
      <Header
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
      {openModal && <ModalWellcome />}
    </div>
  )
}

export default App
