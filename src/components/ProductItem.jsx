import { useContext } from 'react'
import React from 'react';
import { CartContext } from '../context/CartContext'

function ProductItem({ product }) {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <div className='product'>
            <div className="product-image">
                <a href="#" title={product.title}>
                    <img src={product.image} alt={product.title} />
                </a>
            </div>
            <div className="product-details">
                <span className='product-title'>
                    {product.title}
                </span>
                <span className='product-price'>
                    {(product.price).toLocaleString('fa-IR')} تومان
                </span>
                {productQuantity > 0 ?
                    <div className='cart-controll'>
                        <div className='cart-counter'>
                            <span onClick={() => cart.addItemToCart(product.id)}><i className="fa fa-plus"></i></span>
                            <span className='quantity'>{productQuantity}</span>
                            <span onClick={() => cart.removeItemFromCart(product.id)}><i className="fa fa-minus"></i></span>
                        </div>
                        <button onClick={() => cart.deleteItemFromCart(product.id)} className='delete-from-cart'>حذف از سبد خرید</button>
                    </div>

                    : <button onClick={() => cart.addItemToCart(product.id)} className='add-to-cart'>افزودن به سبد خرید</button>
                }
            </div>
        </div>
    )
}

export default ProductItem