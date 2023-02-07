import { Button, Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useCartContext } from "../../Context/CartContext";
const index = () => {

  const {listaCarrito , totalPrice, removeProduct, clearCart } = useCartContext()




  return (
    <Center>
      <VStack>
        {listaCarrito.map(product =>
          <HStack key={product.id} boxShadow = 'lg' p='6' rounded = 'md' spacing={10} bg="white">
            <Image src={product.image} alt={product.title} width='100px' />
            <Text as='b'>{product.title}</Text>
            <Text as='b'>Cantidad: {product.quantity}</Text>
            <Text as='b'>Precio: U$S {product.price * product.quantity}</Text>
            <Button colorScheme='red' size='sm' onClick={()=> removeProduct(product.id)}>X</Button>
          </HStack>
        )}
        {listaCarrito.length === 0 ?
          <h1 className='carritoTitle'>Tu carrito esta vacio, no salgas sin comprar!!! </h1>
          : 
          <>
          <Flex>
          <Text m='9' className ='totalCart'>Total: U$S ${totalPrice()}</Text>   
          <Button classname ='vaciarCarrito' m='9' p='5' colorScheme='red' size='sm' onClick={clearCart}>Vaciar Carrito</Button>
          <Button colorScheme='red'  m='9' p='5' size='sm'>Finalizar compra</Button>
          </Flex>
          </>
          }
      </VStack>
    </Center>
  )
}

export default index
