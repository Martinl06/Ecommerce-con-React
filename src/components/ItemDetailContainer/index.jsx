import { useEffect, useState } from "react"

import ItemDetail from "../ItemDetail"
import Spinner from "../Spinner"
import { useParams } from "react-router-dom"

import { collection, getDocs } from "firebase/firestore";
import {db} from "../../db/firebase-config"


const index = () => {
  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()


  useEffect(() => {
    setLoading(true)
    const productosCollection = collection(db, "Items");
    const firestore = getDocs(productosCollection);

    firestore.then((snapshot) => {
        const productos = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setListProduct(productos.find(prod => prod.id === id))
        setLoading(false)
      })
  },[id])
  
  
  
  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct} /> : <Spinner/>}
    </>
    
  )
}

export default index
