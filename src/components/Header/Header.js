import './styles.scss'
import logo from '../../images/luar.jpg'
import React, { useEffect, useState } from 'react'
import { string, func } from 'prop-types'
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

  console.log({ copyCategories })

  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      {/* <h1 className="header__title">Lista de Precios</h1> */}
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
