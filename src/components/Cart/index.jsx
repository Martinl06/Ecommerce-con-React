import { Button, Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useCartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from 'react';

const index = () => {


  const {listaCarrito , totalPrice, removeProduct, clearCart} = useCartContext()
  const agregarAlerta = withReactContent(Swal);


  useEffect(() => {
    agregarAlerta.fire({title: "Producto removido del carrito", icon: "success", showConfirmButton: false, timer: 2000,})
  }, [removeProduct])


  
            
          

  return (
    <Center>
      <VStack>
        {listaCarrito.map(product =>
          <HStack key={product.id} 
          boxShadow = 'lg' 
          p='6' 
          rounded = 'md' 
          spacing={6} 
          bg="white" 
          flexWrap= 'wrap'>
            <Image src={product.image} alt={product.title} width='100px' />
            <Text textAlign= 'justify' as='b'>{product.title}</Text>
            <Text as='b'>Cantidad: {product.quantity}</Text>
            <Text as='b'>Precio: U$S {product.price * product.quantity}</Text>
            <Button colorScheme='red' size='sm' 
            onClick={()=> removeProduct(product.id)}>X</Button>
            
            
          </HStack>
        )}
        {listaCarrito.length === 0 ?
          <h1 className='carritoTitle'>Tu carrito esta vacio, no salgas sin comprar!!! </h1>
          : 
          <>
          <Flex flexWrap= 'wrap'>
          <Text m='9' className ='totalCart'>Total: U$S ${totalPrice()}</Text>   
          <Button className ='vaciarCarrito' m='9' p='5' colorScheme='red' size='sm' onClick={clearCart}>Vaciar Carrito</Button>
          <Button colorScheme='red'  m='9' p='5' size='sm'>Finalizar compra</Button>
          </Flex>
          </>
          }
      </VStack>
    </Center>
  )
}

export default index
