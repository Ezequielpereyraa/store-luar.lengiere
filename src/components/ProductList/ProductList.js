/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import getProducts from '../../utils/api'
import DATA from '../../utils/data'
import Cart from '../Cart/Cart'
import Modal from '../Modal/Modal'
import Search from '../Product/components/Search'
import Product from '../Product/Product'

const ProductList = ({ selectedCategory }) => {
  const [cartProduct, setCartProduct] = useState([])
  const [products, setProducts] = useState([])
  const [searchName, setSearchName] = useState('')
  const [isLoad, setLoad] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const refProduct = [...products]

  useEffect(() => {
    getProducts(DATA.googleSheetsProducts).then(setProducts)
    setTimeout(() => {
      setLoad(true)
    }, 4000)
  }, [])

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
        <div className="productContainer">
          {productsSearch?.map((product, index) => (
            <Product
              key={index}
              setCartProduct={setCartProduct}
              cartProduct={cartProduct}
              {...product}
            />
          ))}
        </div>
      )}
      {isLoad && !productsSearch.length && (
        <h1 className="error">No hay productos</h1>
      )}
      <Cart
        cartProduct={cartProduct}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {openModal && (
        <Modal cartProduct={cartProduct} setOpenModal={setOpenModal} />
      )}
    </>
  )
}

export default ProductList
