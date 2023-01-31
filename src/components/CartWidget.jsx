import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const CartWidget = () => {
  return (
    <NavLink as ={Link} to= "/cart">
      <span className='numero'><i className="bi bi-cart4"></i></span>
      </NavLink>
  )
}

export default CartWidget
