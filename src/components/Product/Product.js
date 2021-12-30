/* eslint-disable react/prop-types */
import './styles.scss'

import React from 'react'

const Product = ({ product, price, description, quantity, unity, img }) => {
  return (
    <div className="product">
      {img && <img className="product__img" src={img} alt={product} />}
      {product && <h4 className="product__title">{product}</h4>}
      <div className="product__info">
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
