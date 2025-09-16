import { useState, useEffect} from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("se monto el componente")
  },[count])

  const handleAdd = () => setCount(count + 1)
  const handleSub = () => setCount(count - 1)

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  )
}

export default Counter
