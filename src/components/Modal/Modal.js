import React from 'react'

import './styles.scss'

const Modal = ({ cartProduct, setOpenModal }) => {
  const closeModal = () => setOpenModal(false)
  const send = (cartProduct) => {
    const items =
      cartProduct.length &&
      cartProduct.map((item) => `${item.product} *$${item.price}*`).join('\n')
    const total =
      cartProduct.length &&
      cartProduct.reduce((acc, item) => Number(acc) + Number(item.price), 0)
    const headerText = '*Hola!* Estoy interesada en los artículos:'
    const totalText = `*Total: $${total}*`
    const returnTextWsp = [headerText, items, totalText].join('\n')
    return encodeURIComponent(returnTextWsp)
  }

  return (
    <div className="modal">
      <button className="closeModal" onClick={() => closeModal()}>
        X
      </button>
      <h1>{cartProduct.length ? 'Tu Pedido' : 'No hay productos Agregados'}</h1>
      <div className="modal__content">
        {Boolean(cartProduct.length) &&
          cartProduct.map((product) => (
            <div key={product.product} className="cart-product">
              <p>{product.product}</p>
              <strong>${product.price}</strong>
            </div>
          ))}
      </div>
      <div className="modal__footer">
        <div className="total">
          <span>Total</span>
          <strong>
            $
            {cartProduct.length &&
              cartProduct.reduce(
                (acc, item) => Number(acc) + Number(item.price),
                0
              )}
          </strong>
        </div>
        <a
          className="modal__button"
          _target="blank"
          href={`https://wa.me/5493515325637?text=${send(cartProduct)}`}
        >
          <img src="https://icongr.am/fontawesome/whatsapp.svg?size=24&color=ffffff" />
          <span>Completar Pedido</span>
        </a>
      </div>
    </div>
  )
}

export default Modal
