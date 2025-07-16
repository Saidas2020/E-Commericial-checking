import React, { useState } from "react";
import all_product from "../Components/../assets/all_product";
import { ShopContext } from "./ShopContextContext";

const getDefaultCart = () => {
    let cart = {};
    for (let product of all_product) {
        cart[product.id] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    // const contextValue = {all_product,cartItems};
    
    const addToCart = (itemId) =>{
        // console.log("Inside addToCart, product ID:", itemId);
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);

    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId]-1}))
    }
    
    
    const contextValue = { all_product, cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;