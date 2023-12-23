import React from 'react'

function ProductItem({data}) {
  return (
    <div className='product'>
        <div className="product-image">
            <a href="#" title={data.title}>
                <img src={data.image} alt={data.title} />
            </a>
        </div>
        <div className="product-details">
        <span className='product-title'>
            {data.title}
        </span>
        <span className='product-price'>
            ${data.price}
        </span>
        <button className='add-to-cart'>افزودن به سبد خرید</button>
        </div>
    </div>
  )
}

export default ProductItem