import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'




const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider ({ children }){

    const [listaCarrito, setListaCarrito] = useState([])

    const isInCart = (id) => listaCarrito.find(product => product.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)){
            const newCart = listaCarrito.map(product => {
                if (product.id === item.id){
                    const newQuantity = product.quantity + quantity
                    return {...product, quantity: newQuantity}
                } else{
                    return product
                }
            })
            setListaCarrito(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setListaCarrito([...listaCarrito, newProduct])
        }
    }



        const removeProduct = (id) => {setListaCarrito(listaCarrito.filter(product => product.id != id ))
        Swal.fire({
            icon: 'error',
            title: 'Producto removido',
            text: 'Has quitado un producto de tu carrito',
            footer: '<a href="">Vas a dejar esto asi?</a>'
          })}

        const clearCart = () => {setListaCarrito([]) 
        Swal.fire({
            title: 'Carrito vacio',
            text: "No hay productos en tu carrito!!!",
            icon: 'error',
            confirmButtonText: 'ok',
            timer: 4000,

        })}

        const totalPrice = () =>{
            return listaCarrito.reduce((acc, product) => acc += (product.price * product.quantity), 0)
        } 
        const totalQuantity = () =>{ 
            return listaCarrito.reduce((acc, product) => acc += product.quantity, 0)
        }


        const carritoVacio = () => setListaCarrito([])
        

    return(
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            clearCart,
            totalPrice,
            totalQuantity,
            carritoVacio,
            listaCarrito
        }}>
            {children}
        </CartContext.Provider>
    )


}


export default CartContext
