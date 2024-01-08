import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal } from 'react-bootstrap';
import ModalProduct from './ModalProduct';

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  // const productCount = cart.items.length; //wrong way

  return (
    <>
      <div className='navbar'>
        <div className="navbar-cart">
          <button className='navbar-btn' onClick={handleShow}>
            <span>سبد خرید</span>
            <i className="fa fa-shopping-cart"></i>({productCount})
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} className='modal'>
        <Modal.Header>
          <h3 className="title">سبد خرید</h3>
          <span onClick={handleClose} className="close-btn"><i className='fa fa-close'></i></span>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
            
              {cart.items.map((item) => (
                <ModalProduct key={item.id} id={item.id} quantity={item.quantity} ></ModalProduct>
              ))}
              <div className="sub-order">
                <button className='submit-order'>ثبت سفارش</button>
                <div className="total-price"> قیمت کل سفارش: {(cart.getTotalAmount()).toLocaleString('fa-IR')} تومان</div>
              </div>
            </>
          )
            : (
              <>
                <h3>سبد خرید خالی است</h3>
              </>
            )
          }
        </Modal.Body>

      </Modal>
    </>
  )
}
