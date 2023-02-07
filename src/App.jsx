import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Imagen from "./components/Imagen";
import Footer from "./components/Footer";


import { useEffect, useState } from "react";
import Cart from './components/Cart'
import { CartContextProvider } from "./Context/CartContext";


function App() {
  
  
  /*const [Items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "Items")


  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    console.log(docs);
    setItems(docs);
  };


useEffect(() => {
  getItems();
}, []);*/




  return (
  <CartContextProvider>
    <ChakraProvider> 
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path ="/Todos" element={<ItemListContainer greeting={<h1>Bienvenidos a nuestra tienda virtual!!!</h1>}/>} />
            <Route path="/" element = {<Imagen/>} />
            <Route path="/category/:category" element = {<ItemListContainer greeting={<h1>Bienvenidos a nuestra tienda virtual!!!</h1>}/>} />
            <Route path="/product/:id" element = {<ItemDetailContainer/> } />
            <Route path="/cart" element = {<Cart/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </CartContextProvider>
    
    
  )
}

export default App
