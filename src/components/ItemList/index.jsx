import React from 'react'
import Item from '../Item'
import { Flex, Grid } from '@chakra-ui/react'





const index = ({listProduct}) => {
  
  return (
    <>
    <Flex flexDirection='column' maxW='lg' flexWrap='wrap'>
    <Grid templateColumns='repeat(3, 1fr)' gap={1} >
      {listProduct.map(product => <Item key={product.id} product ={product} />)}
    </Grid>
    </Flex>

    </>
  )
}

export default index
