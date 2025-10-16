import './App.css'
import Navbar from './component/Navbar'
import ItemListConteiner from './component/ItemListConteiner'
import ItemDetailCoteiner from './component/ItemDetailCoteiner'
import { BrowserRouter,Routes, Route } from 'react-router'
import CartConteiner from './component/CartConteiner'
import Checkout from './component/checkOut'



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      
    <BrowserRouter>
      <Navbar></Navbar>  
        <Routes>
          <Route path="/" element={<ItemListConteiner/>} />
          <Route path="/category/:name" element={<ItemListConteiner/>} />
          <Route path="/item/:id" element={<ItemDetailCoteiner/>} />
          <Route path="cart" element={<CartConteiner/>} />
          <Route path="Checkout" element={<Checkout/>} />
        </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
