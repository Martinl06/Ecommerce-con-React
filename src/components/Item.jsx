import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, SimpleGrid } from '@chakra-ui/react'



const Item = ({title, description, price,image}) => {



  return (
    <>
    <SimpleGrid minChildWidth='120px' spacing='60px'>
    <Box>
      <Card maxW='xs' bg= 'yellow.100' m={10} mt='20' height={700}>
  <CardBody  className="cardGrid" >
    <Image height={300} width={320}
      src={image}
      alt={image}
      borderRadius='lg'
    />
    <Stack className = 'cardCard' mt='9' spacing='3'>
      <Heading size='md' color="black">{title}</Heading>
      <Text color = 'white'fontSize= '15' fontWeight='bold'>
      </Text>
      <Text color='blue.600' fontSize= '3xl' fontWeight='bold'>
        U$S {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter  className="cardGrid">
  <div className="divButton">
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='black'>
        Add to cart
      </Button>
    </ButtonGroup>
    </div>
  </CardFooter>
</Card>
</Box>
</SimpleGrid>

</>
  )
}

export default Item
