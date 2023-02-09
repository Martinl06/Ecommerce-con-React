import React from 'react'
import Item from '../Item'
import { Flex, Grid } from '@chakra-ui/react'





const index = ({listProduct}) => {
  
  return (
    <>
    
    <Grid className='cardEstilos' templateColumns='repeat(3, 1fr)' templateRows='repeat(1, 1fr)' gap={1}>
      {listProduct.map(product => <Item key={product.id} product ={product} />)}
    </Grid>
    

    </>
  )
}

export default index
