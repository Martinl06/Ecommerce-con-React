import {  Button,  Card, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'

const ItemDetail = ({listProduct}) => {

    const {title ,image, description} = listProduct


  return (
    <Card
  bgGradient='linear(to-r, gray.500, blue.100)'
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
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ItemDetail
