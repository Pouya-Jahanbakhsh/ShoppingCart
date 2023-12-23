import React from 'react'
import ProductItem from './ProductItem'
import { productList } from '../data/items.js'

function AllProducts() {
    return (
        <div className='container'>
            {productList.map(item => (
                <div key={item.id}>
                    <ProductItem data={item} />
                </div>
            ))}
        </div>
    )
}

export default AllProducts