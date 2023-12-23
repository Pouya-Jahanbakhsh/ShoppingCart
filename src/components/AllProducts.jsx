import React from 'react'
import ProductItem from './ProductItem'
import { productList } from '../data/items'

function AllProducts() {
    return (
        <div className='container'>
            {productList.map(item => (
                <div key={item.id}>
                    <ProductItem product={item} />
                </div>
            ))}
        </div>
    )
}

export default AllProducts