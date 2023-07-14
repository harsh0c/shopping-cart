import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
          <Link to="/">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar