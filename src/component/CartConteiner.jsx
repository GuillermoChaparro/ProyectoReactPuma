import { useContext } from "react"
import { CartContext } from "../context/CartContext"



import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function CartConteiner(){

    const{cart, getTotal}= useContext(CartContext)
    const total=getTotal()

    return(
<div>
  <ListGroup as="ol" numbered>
    {cart.map(item => (
      <ListGroup.Item key={item.id}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.title}</div>
          {item.description}
        </div>
        <Badge bg="primary" pill>
          {item.count}
        </Badge>
      </ListGroup.Item> 
    ))}
  </ListGroup>
  <h1>total: {total}</h1>
  <button>finalizar compra</button>
</div>
    )
}
export default CartConteiner