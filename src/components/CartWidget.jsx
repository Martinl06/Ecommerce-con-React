import { Image } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
    <span className="numeroFijo">2</span>
      <Image borderRadius = '10px' 
        src = "https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" w="3rem" h="3rem"/>
    </div>


  )
}

export default CartWidget
