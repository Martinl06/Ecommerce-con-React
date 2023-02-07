import { createContext, useState, useContext } from "react";

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

        const removeProduct = (id) => setListaCarrito(listaCarrito.filter(product => product.id != id))

        const clearCart = () => setListaCarrito([])

        const totalPrice = () =>{
            return listaCarrito.reduce((acc, product) => acc += (product.price * product.quantity), 0)
        } 
        const totalQuantity = () =>{ 
            return listaCarrito.reduce((acc, product) => acc += product.quantity, 0)
        }


    return(
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            clearCart,
            totalPrice,
            totalQuantity,
            listaCarrito
        }}>
            {children}
        </CartContext.Provider>
    )


}


export default CartContext
