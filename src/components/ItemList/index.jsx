import React from 'react'
import Item from '../Item'
import { Grid } from '@chakra-ui/react'




const index = ({listProduct}) => {
  
  return (
    <>
    
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
      {listProduct.map(product => <Item key={product.id} title = {product.title} description = {product.description} price = {product.price} 
       image = {product.image} />)}
    </Grid>
    
    </>
  )
}

export default index
