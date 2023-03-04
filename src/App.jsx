import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Imagen from "./components/Imagen";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";


import Cart from './components/Cart'
import { CartContextProvider } from "./Context/CartContext";


function App() {
  
  return (
  <CartContextProvider>
    <ChakraProvider> 
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/Ecommerce-con-React" element = {<Imagen/>} />
            <Route path ="/Todos" element={<ItemListContainer greeting={<h1 className="titulo-Principal">Bienvenidos a nuestra tienda virtual!!!</h1>}/>} />
            <Route path="/" element = {<Imagen/>} />
            <Route path="/category/:category" element = {<ItemListContainer greeting={<h1 className="titulo-Principal">Bienvenidos a nuestra tienda virtual!!!</h1>}/>} />
            <Route path="/product/:id" element = {<ItemDetailContainer/> } />
            <Route path="/cart" element = {<Cart/>}/>
            <Route path='/Formulario' element={<Formulario/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </CartContextProvider>
    
    
  )
}

export default App
