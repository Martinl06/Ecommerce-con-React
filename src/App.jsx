import { useState } from 'react'
import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import Card from "./components/Card";




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Navbar />
   <ItemListContainer greeting={"Bienvenidos a nuestra tienda virtual!!!"} />
   <Card />
    </div>
  )
}

export default App
