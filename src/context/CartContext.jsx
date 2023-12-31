import { createContext, useState } from "react";
import React from "react";
import { getProductData, productList } from "../data/items";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    getTotalAmount: () => { }
})

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find((item) => item.id === id)?.quantity
        if (quantity === undefined) { return 0 }
        return quantity
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }])
        } else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
            )
        }
    }

    function deleteItemFromCart(id) {
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => {
                return item.id != id
            })
        )
    }

    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteItemFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                ))
        }

    }
    function getTotalAmount(){
        let totalAmount = 0;
        cartProducts.map((item) => {
            const productData = getProductData(item.id);
            totalAmount += productData.price * item.quantity;
        })
        return totalAmount;
    }

    const Contextvalue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        getTotalAmount,
    }

    return (
        <CartContext.Provider value={Contextvalue}>{children}</CartContext.Provider>
    )
}