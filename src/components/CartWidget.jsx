import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useCartContext} from './../Context/CartContext'


const CartWidget = () => {

  const {totalQuantity} = useCartContext()

  return (
    <NavLink as ={Link} to= "/cart">
      <span><i className="bi bi-cart4"></i></span>
      <Text className= "numeroCarrito" fontSize='xs'>{totalQuantity()}</Text>
      </NavLink>
  )
}

export default CartWidget
