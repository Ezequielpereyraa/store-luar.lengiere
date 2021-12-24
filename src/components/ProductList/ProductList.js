/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import getProducts from '../../utils/api'
import DATA from '../../utils/data'
import Search from '../Product/components/Search'
import Product from '../Product/Product'

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([])
  const [searchName, setSearchName] = useState('')
  const [isLoad, setLoad] = useState(false)

  const refProduct = [...products]
  useEffect(() => {
    getProducts(DATA.googleSheetsProducts).then(setProducts)
    setTimeout(() => {
      setLoad(true)
    }, 4000)
  }, [])
  console.log({ products })
  const productSelectedCategory = () => {
    let productsFiltered = []

    if (selectedCategory.length > 0) {
      selectedCategory.forEach((categorys) => {
        if (selectedCategory.includes(categorys)) {
          const filtrado = refProduct.filter(({ category }) =>
            category?.toLowerCase().includes(categorys.toLowerCase())
          )
          productsFiltered = [...productsFiltered, ...filtrado]
        }
      })
    } else {
      const searchProduct = refProduct.filter(
        (
          { product } // recorro los productos
        ) => product?.toLowerCase().includes(searchName.toLowerCase())
      )
      productsFiltered = [...searchProduct]
    }

    return productsFiltered
  }

  const productsSearch = productSelectedCategory()
  return (
    <>
      <Search setSearchName={setSearchName} searchName={searchName} />
      {Boolean(productsSearch?.length) && (
        // (
        <div className="productContainer">
          {productsSearch?.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      )}
      {isLoad && !productsSearch.length && (
        <h1 className="error">No se econtraron productos</h1>
      )}
    </>
  )
}

export default ProductList
