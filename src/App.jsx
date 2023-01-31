import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Imagen from "./components/Imagen";
import Footer from "./components/Footer";
import {db} from "./db/firebase-config"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cart from './components/Cart'


function App() {
  
  
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, 'items')


  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    console.log(docs);
    setItems(docs);
  };


useEffect(() => {
  getItems();
}, []);




  return (
    
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
    
    
  )
}

export default App
