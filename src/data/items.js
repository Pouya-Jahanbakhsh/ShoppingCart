const productList = [
    {
        id: '1',
        title: 'product 1',
        price: 125752000,
        image: 'images/new-product 1.jpg'
    },
    {
        id: '2',
        title: 'product 2',
        price: 2500000,
        image: 'images/new-product 2.jpg'
    },
    {
        id: '3',
        title: 'product 3',
        price: 5150000000,
        image: 'images/new-product 3.jpg'
    },
    {
        id: '4',
        title: 'product 4',
        price: 375000,
        image: 'images/new-product 4.jpg'
    }
]

function getProductData(id) {
    let productData = productList.find(item => item.id === id);
    return productData;
}

export { productList, getProductData }