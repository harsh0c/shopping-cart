import React, { useContext } from 'react'
import { ShopContext} from '../../context/ShopContext';

function CartItem(props) {

  const {id,name,price,productImage}=props.data;
  const {cartItems,addToCart,removeFromCart,updateCount}=useContext(ShopContext);

  return (
    <div className='cartItem' key={id}>
        {/*eslint-disable-next-line*/}
        <img src={productImage}/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e)=>updateCount(Number(e.target.value),id)} />
                <button onClick={()=>addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem