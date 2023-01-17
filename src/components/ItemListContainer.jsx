import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { products } from '../Fetch/products'
import { functionFetch } from '../Fetch/FunctionFetch'
import { Route, Routes } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    functionFetch(products)
      .then(res => {
        setLoading(false)
        setListProduct(res)
      })
  }, [])




  return (
    <>
    <Flex
    color="Black"
    fontFamily="sans-serif"
    fontSize="30px"
    textAlign="center"
    alignItems="center"
    justifyContent="center"
    fontWeight="bold"
    marginTop="50px"
    >
  <div className="Titulo">{greeting}</div>
    

    </Flex>

    <Routes>
      {<Route path='/' element={<p>'Bienvenido a Flor De Loto Store'</p>}/> }
  </Routes>
    {!loading ? <ItemList listProduct={listProduct} /> : <Text>Cargando...</Text>}
    

    </>
  )
}

export default ItemListContainer
