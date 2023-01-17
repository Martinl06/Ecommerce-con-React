import Navbar from "./components/Navbar";
import "./app.css"
import ItemListContainer from './components/ItemListContainer';
import Card from "./components/Item";




function App() {

  return (
    <div className="App">
   <Navbar />
   <ItemListContainer greeting={"Bienvenidos a nuestra tienda virtual!!!"} />
   <Card />
   

    </div>
  )
}

export default App
