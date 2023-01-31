import { useEffect, useState } from "react"
import { products } from "../../Fetch/products"
import { functionFetch } from "../../Fetch/FunctionFetch"
import ItemDetail from "../ItemDetail"
import Spinner from "../Spinner"
import { useParams } from "react-router-dom"


const index = () => {
  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()


  useEffect(() => {
    setLoading(true)
    functionFetch(products)
      .then(res => {
        setLoading(false)
        setListProduct(res.find(item => item.id === parseInt(id)))
      })
      }, [])
  
  
  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct} /> : <Spinner/>}
    </>
    
  )
}

export default index
