import React, { useContext } from 'react'
import { getProductData } from '../data/items'
import { CartContext } from '../context/CartContext';

function ModalProduct({ id, quantity }) {

    const cart = useContext(CartContext);

    const productData = getProductData(id);

    return (
        <>
        <div className='modal-products'>
            <div className="modal-product-image">
                <img src={productData.image} alt={productData.title} />
            </div>
            <div className="modal-product-title">
                {productData.title}
            </div>
            <div className='cart-counter'>
                <span onClick={() => cart.addItemToCart(id)}><i className="fa fa-plus"></i></span>
                <span className='quantity'>{quantity}</span>
                <span onClick={() => cart.removeItemFromCart(id)}><i className="fa fa-minus"></i></span>
            </div>
            <div className="price">
                قیمت : {(quantity * productData.price).toLocaleString('fa-IR')} تومان
            </div>
        </div>
        </>
    )
}

export default ModalProduct