import React from 'react'
import cartIcon from '../svg/cart.svg'

const Cart = ({ cartProduct, openModal, setOpenModal }) => {
  const openCloseModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div onClick={() => openCloseModal()} className="container-icon">
      <p className="number-icon">{cartProduct.length}</p>
      <img className="cart-icon" src={cartIcon} alt="icon" />
    </div>
  )
}

export default Cart
