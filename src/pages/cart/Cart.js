import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const {cartItems,getTotalAmount}=useContext(ShopContext);
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1></div>
      <div className='cartItems'>
          {PRODUCTS.map((product)=>{
            if(cartItems[product.id]>0) return <CartItem data={product} key={product.id}/>
          })}
      </div>
      <div className='checkout'>
        <p>SubTotal:${getTotalAmount()}</p>
        <button onClick={()=>navigate("/shopping-cart")}>Continue Shopping</button>
        <button>CheckOut</button>
      </div>
    </div>
  )
}

export default Cart