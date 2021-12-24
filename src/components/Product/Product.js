/* eslint-disable react/prop-types */
import './styles.scss'

import React from 'react'

const Product = ({ product, price, description, quantity, unity, img }) => {
  console.log({ img })
  return (
    <div className="product">
      {img && <img className="product__img" src={img} alt={product} />}
      <div className="product__info">
        {product && <h4 className="product__title">{product}</h4>}
        {description && <p className={'product__description'}>{description}</p>}
        {price
          ? (
          <strong className="product__price">${price && price}</strong>
            )
          : (
          <strong className="product__price--consultar">Consultar</strong>
            )}
      </div>
    </div>
  )
}

export default Product
