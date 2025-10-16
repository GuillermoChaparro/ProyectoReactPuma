import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../context/CartContext'

function ItemCount({item}) {

    const {addToCart}=  useContext(CartContext)
    const [count, setCount] = useState(0)

    
  const handleAdd = () => setCount(count + 1)
  const handleSub = () => setCount(count - 1)

  const handleAddToCart=()=>{
        addToCart({...item, count})
  }

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleSub} variant='danger'>-</Button>
      <Button onClick={handleAdd} variant='success'>+</Button>
      <Button onClick={handleAddToCart} variant='dark'>
        agregar al carrito

      </Button>
    </div>
  )
}

export default ItemCount
