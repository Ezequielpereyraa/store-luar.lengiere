import './styles.scss'
import React, { useEffect, useState } from 'react'
import { string, func } from 'prop-types'

import logo from '../../images/luar.jpg'
import getProducts from '../../utils/api'
import DATA from '../../utils/data'

import Category from './componets/Category'

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getProducts(DATA.googleSheetsCategories).then(setCategories)
  }, [])
  const mensaje = categories?.filter(
    (category) => category.mensaje === 'activo'
  )
  const copyCategories = [...categories].filter(
    ({ Categories, mensaje }) => Categories && mensaje !== 'activo'
  )

  return (
    <div className="header">
      <img alt="logo" className="header__logo" src={logo} />
      {mensaje && mensaje.length > 0 && (
        <h2 className="header__hourse">{mensaje?.[0]?.Categories}</h2>
      )}
      <div className="category">
        {copyCategories?.map(({ Categories }, index) => (
          <Category
            key={index}
            category={Categories.trim()}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
    </div>
  )
}

Header.propTypes = {
  selectedCategory: string,
  setSelectedCategory: func
}

Header.defaultProps = {
  selectedCategory: '',
  setSelectedCategory: () => {}
}

export default Header
