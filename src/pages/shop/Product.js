import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext';

function Product(props) {

  const {cartItems,addToCart}=useContext(ShopContext);
  const {id,name,price,productImage}=props.data;
  return (
    <div className='product'>
        {/*eslint-disable-next-line */}
        <img src= {productImage}/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>addToCart(id)}>ADD TO CART {cartItems[id]>0 && <>({cartItems[id]})</>}</button>
    </div>
  )
}

export default Product