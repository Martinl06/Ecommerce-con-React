import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'
import Spinner  from './Spinner'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../db/firebase-config"



const ItemListContainer = ({greeting}) => {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()
  

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "Items");
    const firestore = getDocs(productsCollection);

    firestore.then((snapshot) => {
        const productos = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        if (category) {
          setListProduct(productos.filter(product=>product.category===category));
          setLoading(false);
        } else {
          setListProduct(productos);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);



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
