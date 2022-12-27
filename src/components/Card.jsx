import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const card = () => {
  return (
    <div>
      <Card maxW='sm' bg="black">
  <CardBody>
    <Image
      src='https://as01.epimg.net/meristation/imagenes/2020/07/27/noticias/1595837127_355721_1595837411_portada_normal.jpg'
      alt='Comic'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Dragon Ball Super</Heading>
      <Text color = 'white'>
       lorem ipsum dolor sit amet, consectetur adipis
      </Text>
      <Text color='red.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default card
