import {  Button,  Card, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'
import { useState } from 'react'
import NavLink from 'react-bootstrap/esm/NavLink'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../Context/CartContext'

const ItemDetail = ({listProduct}) => {


    const {title ,image, description, price, initial, stock} = listProduct

   const [estaAgregado, setEstaAgregado] = useState(false)

   const {addToCart} = useCartContext()


   const onAdd = (quantity) => {
    addToCart(listProduct, quantity)
    setEstaAgregado(true)

   }
  

  return (
    <Card
  bgGradient='linear(to-r, gray.100, blue.100)'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src={image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size= "2xl"  >{title}</Heading>
      <Text py='20' fontFamily = 'Helvetica' fontWeight='semibold'>
       {description}
      </Text>
      <Text color='blue.600' fontSize= '3xl' fontWeight='bold'>
        U$S {price}
      </Text>
    </CardBody>
    <CardFooter>
    {
      estaAgregado ?
      <NavLink as= {Link} to="/cart">
        <Button colorScheme='blue' size='sm'>Ir al carrito</Button>
      </NavLink>
       :
       <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    }
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ItemDetail
