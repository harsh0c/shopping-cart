import React,{createContext,useState} from 'react'
import {PRODUCTS} from "../products"    // data array of objects.

export const ShopContext=createContext(null);   // Context

const getDefaultCart=()=>{
    let cart={};    // object

    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState(getDefaultCart());  // state variable-object.

    const getTotalAmount=()=>{
        let am=0;
        for(let i=1;i<=PRODUCTS.length;i++){
            if(cartItems[i]>0){
                am+=(PRODUCTS[i-1].price*cartItems[i]);
            }

        }
        return am;
    }

    const addToCart=(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
    }
    const removeFromCart=(itemID)=>{
        setCartItems(prev=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const updateCount=(newAmount,itemID)=>{
        
        setCartItems((prev)=>({...prev,[itemID]:newAmount}));
    }
    const contextValue={cartItems,addToCart,removeFromCart,updateCount,getTotalAmount}
    console.log(cartItems)

    return  <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>   // provider with value.
}