import { createContext, useState, useStateContext } from "react";


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider ({ children }){

    const [listaCarrito, setListaCarrito] = useState([])

    const isInCart = (id) => listaCarrito.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)){
            const newCart = cart.map(prod => {
                if (prod.id === item.id){
                    const NewQuantity = prod.quantity + quantity
                    return {...prod, quantity: NewQuantity}
                } else{
                    return prod
                }
            })
            setListaCarrito(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setListaCarrito([...listaCarrito, newProduct])
        }
    }

        const removeProduct = (id) => setListaCarrito(listaCarrito.filter(prod => prod.id !== id))

        const clearCart = () => setListaCarrito([])

        const totalPrice = () =>{
            return listaCarrito.reduce((acc, product) => acc += (product.price * product.quantity), 0)
        } 
        const totalQuantity = () =>{ 
            return listaCarrito.reduce((acc, product) => acc += product.quantity, 0)
        }


    return(
        <CartContext.Provider value={[
            addToCart,
            removeProduct,
            clearCart,
            totalPrice,
            totalQuantity,
        ]}>
            {children}
        </CartContext.Provider>
    )


}


export default CartContext
