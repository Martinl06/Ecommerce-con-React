import React from 'react'
import Item from '../Item'
import { Center, Flex } from '@chakra-ui/react'



const index = ({listProduct}) => {
  
  return (
    <>
    <Center>
    <Flex flexWrap='wrap' flexDirection='row' mx='7'>
    {listProduct.map(product => <Item key={product.id} product ={product} />)}
    </Flex>
    </Center>

      
    
    

    </>
  )
}

export default index
