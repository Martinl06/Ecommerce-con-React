import { Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex
    color="Black"
    fontFamily="sans-serif"
    fontSize="20px"
    textAlign="center"
    alignItems="center"
    justifyContent="center"
    fontWeight="bold"
    >
  <div className="Titulo">{greeting}</div>

    </Flex>
  )
}

export default ItemListContainer
