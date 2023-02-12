import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
  } from '@chakra-ui/react'
  import { useCartContext } from '../../Context/CartContext';
  import { collection, addDoc, getFirestore } from "firebase/firestore";
  import {db} from "../../db/firebase-config"

  import Swal from "sweetalert2";
  import withReactContent from 'sweetalert2-react-content'
import { Link, NavLink } from 'react-router-dom';



  const index  = () => {
  
    const [inputNombre , setInputNombre] = useState('')
    const [inputApellido , setInputApellido] = useState('')
    const [inputDireccion , setInputDireccion] = useState('')
    const [inputEmail , setInputEmail] = useState('')
    const [inputConfirmEmail , setInputConfirmEmail] = useState('')
    const [inputTelefono , setInputTelefono] = useState('')


    const {listaCarrito, totalPrice, carritoVacio} = useCartContext();


    const createOrder = {
        items: listaCarrito.map(product =>({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
        Nombre: inputNombre,
        Apellido: inputApellido,
        Direccion: inputDireccion,
        Email: inputEmail,
        Telefono: inputTelefono,
        

    }
  
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, createOrder)
        .then(({id}) => {
          const MySwal = withReactContent(Swal)
          MySwal.fire({
              title: <p>Compra Finalizada </p>,
              text: `Gracias por su compra ${inputNombre} ${inputApellido}, !!!, Su Orden de Compra es: ${id}, nos estaremos comunicando con usted para acordar la entrega`,    
              icon: 'success',
              confirmButtonText: 'Ok',
  
          })
      })
            carritoVacio()
                  
    }



    
    return (
      <>
      <Flex>
      <div className= "forms">
      <h1 className= "tituloForm">Formulario de Compra</h1>
      <div className= "imageForm">
      <img
        src="https://www.stanser.com/wp-content/uploads/2020/12/Flor-de-Loto.jpg"
        className="d-inline-block align-top imageForm "  
        alt="Flor de Loto"/>
      </div>  
        <FormControl isRequired >
          <FormLabel >Nombre</FormLabel>
          <Input id='inputNombre' value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} type='text' placeholder="Nombre"/>
    

          <FormLabel>Apellido</FormLabel>
          <Input id='inputApellido' value={inputApellido} onChange={(e) => setInputApellido(e.target.value)} type="text" placeholder="Apellido" />


          <FormLabel>Dirección</FormLabel>
          <Input id='inputDireccion' value={inputDireccion} onChange={(e) => setInputDireccion(e.target.value)} type="text" placeholder="Dirección" />
    

          <FormLabel>Email</FormLabel>
          <Input id='inputEmail' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" placeholder="mail@ejemplo.com"/>
  

          <FormLabel>Confirmar Email</FormLabel>
          <Input id="inputConfirmEmail" value={inputConfirmEmail} onChange= {(e) => setInputConfirmEmail(e.target.value)} type="email" placeholder="Confirmar Email"/>
  

          <FormLabel>Teléfono</FormLabel>
          <Input id='inputTelefono' value={inputTelefono} onChange={(e) => setInputTelefono(e.target.value)} type="number" placeholder="Teléfono"  />
        </FormControl>
            <NavLink as = {Link} to = "/">
            <Button disabled={
                  !inputNombre || !inputTelefono || !inputEmail || inputConfirmEmail !== inputEmail || !inputApellido || !inputDireccion
                } onClick={handleClick} color='blue' my='2'>Comprar</Button></NavLink>
        <p className="parrafoForm">Muchas gracias por comprar en FlorDeLotoStore!!!</p>
        </div>
        </Flex>
      </>
    );
}


export default index
