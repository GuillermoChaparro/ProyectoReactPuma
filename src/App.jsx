
import './App.css'
import Button from './component/button'
import Navbar from './component/Navbar'
import ItemListConteiner from './component/ItemListConteiner'
import { BrowserRouter,Routes, Route } from 'react-router'


import { useRef } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const inputRef=useRef(null)
  const handleClick= ()=>{
     inputRef.current.focus()
  }

  return (
    <>
      
    <BrowserRouter>
    <Navbar></Navbar>  
      <Routes>
        <Route path="/e" element={<ItemListConteiner/>} />
        <Route path="/category/:id" element={<ItemListConteiner/>} />
        
      </Routes>
    </BrowserRouter>
        <input type="text" ref={inputRef}/>
    <button onClick={handleClick}>click to focus</button>
    
    </>
  )
}

export default App
