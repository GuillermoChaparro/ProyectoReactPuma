
import './App.css'
import Button from './component/button'
import Navbar from './component/Navbar'
import ItemListConteiner from './component/ItemListConteiner'

function App() {
  return (
    <>
    <Button text={"botonazo"}/>
    
    <p>textito</p> 
    <Navbar></Navbar>
    <ItemListConteiner>text{"texto cualquiera"}</ItemListConteiner>
    </>
  )
}

export default App
