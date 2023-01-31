import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { products } from '../Fetch/products'
import { functionFetch } from '../Fetch/FunctionFetch'
import { useParams } from 'react-router-dom'
import Spinner  from './Spinner'


const ItemListContainer = ({greeting}) => {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()
  

  useEffect(() => {
    setLoading(true)
    functionFetch(products)
      .then(res => {
        if(category){
          setLoading(false)
          setListProduct(res.filter(prod => prod.category === category))
        } else {
        setLoading(false)
        setListProduct(res)
        }
      })
  }, [category])



  return (
    <>
    <Flex
    color="black"
    fontFamily="ebrima"
    fontSize="30px"
    textAlign="center"
    alignItems="center"
    justifyContent="center"
    fontWeight="bold"
    marginTop="50px"
    
    >
  <div className="Titulo">{greeting}</div>
    

    </Flex>

    
    {!loading ? <ItemList listProduct={listProduct} /> : <Spinner/>}
    

    
    </>
  )
}

export default ItemListContainer
