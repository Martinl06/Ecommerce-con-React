import { Button, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useCartContext } from '../../context/CartContext'

const index = () => {

  const {listaCarrito , totalPrice, removeProduct, cleanCart } = useCartContext()




  return (
    <Center>
      <VStack>
        {listaCarrito.map(product =>
          <HStack key={product.id} boxShadow = 'lg' p='6' rounded = 'md' spacing={10} bg="white">
            <Image src={product.image} alt={product.title} width='100px' />
            <Text as='b'>{product.title}</Text>
            <Text as='b'>Cantidad: {product.quantity}</Text>
            <Button colorScheme='red' size='sm' onClick={()=> removeProduct(product.id)}>X</Button>
          </HStack>
        )}
        {listaCarrito.length === 0 ?
          <Text>Tu carrito esta vacio </Text>
          : 
          <>
          <Text>Total: U$S {totalPrice}</Text>
          <Button colorScheme='red' size='sm' onClick={cleanCart}>Vaciar Carrito</Button>
          </>
          }
      </VStack>
    </Center>
  )
}

export default index
