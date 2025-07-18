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

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
    }
    
    
    const contextValue = { getTotalCartItems,getTotalCartAmount,all_product, cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;