import { Button, Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";



const index = () => {


  const {listaCarrito , totalPrice, removeProduct, clearCart,} = useCartContext()

            
          

  return (
    <Center>
      <VStack width="39rem" Height="50rem" marginTop="2rem">
        {listaCarrito.map(product =>
          <HStack key={product.id} 
          boxShadow = "0px 1px 10px rgb(10, 10, 10);" 
          p='6' 
          rounded = 'md' 
          spacing={5} 
          bg="white" 
          flexDirection= 'column'>
          <h1 className='carrito-Title'>Producto seleccionados</h1>
            <Image src={product.image} alt={product.title} width='11rem' height="9rem" margin="auto" />
            <Text flexWrap="wrap" paddingTop="3rem" fontFamily="Helvetica" fontSize="1.5rem" textAlign= "center" as='b' margin="auto">{product.title}</Text>
            <Text className='textoDetail' paddingTop="1rem" fontFamily="Bebas Neue" fontSize="1.25rem" textAlign= "center" as='b' margin="auto">Cantidad: {product.quantity}</Text>
            <Text className='textoDetail' paddingTop="1rem" paddingBottom="2rem" fontFamily="Bebas Neue" fontSize="1.25rem" textAlign= "center" as='b' margin="auto">Precio: U$S {product.price * product.quantity}</Text>
            <Button fontSize="1.5rem" flexWrap="wrap" colorScheme='blue' size='sm' margin="auto" onClick={()=> removeProduct(product.id)}>X</Button>
            
            
          </HStack>
        )}
        {listaCarrito.length === 0 ?
          <h1 className='carrito-Title'>Tu carrito esta vacio, no salgas sin comprar!!!</h1>
          : 
          <>
          <Flex flexDirection='column' width='100%' alignItems='center'>
          <Text m='9' className ='totalCart textoDetail'>Total: U$S ${totalPrice()}</Text>   
          <Button className ='vaciarCarrito' p='5' marginBottom={9} colorScheme='blue' size='sm' onClick={clearCart}>Vaciar Carrito</Button>
          <NavLink as= {Link} to="/formulario">
          <Button colorScheme='blue' p='5' marginBottom={9} size='sm' borderTop='1px solid'>Finalizar compra</Button>
          </NavLink>
          </Flex>
          </>
          }
      </VStack>
    </Center>
  )
}

export default index
