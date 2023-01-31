import { Button, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)	
      


    const handleAdd = () => count < stock && setCount(count + 1)
    const handleRest = () => count > initial && setCount(count - 1)

  


  return (
    <>
    <HStack>
        <Button variant='ghost' colorScheme='blue' size='sm' onClick={handleAdd}>+</Button>
        <Text>{count}</Text>
        <Button variant='ghost' colorScheme='blue' size='sm' onClick={handleRest}>-</Button>
        <Button colorScheme='blue' size='sm' onClick={onAdd}>Agregar al carrito</Button>
    </HStack>
    </>
  )
}

export default ItemCount
