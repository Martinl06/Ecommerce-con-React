import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";






function App() {

  return (
    
    <ChakraProvider> 
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element = {<ItemListContainer greeting={"Bienvenidos a nuestra tienda virtual!!!"}/>} />
            <Route path="/category/:category" element = {<ItemListContainer greeting={"Bienvenidos a nuestra tienda virtual!!!"}/>} />
            <Route path="/product/:id" element = {<ItemDetailContainer/> } />
          </Routes>
      </BrowserRouter>
    </ChakraProvider>

    
  )
}

export default App
