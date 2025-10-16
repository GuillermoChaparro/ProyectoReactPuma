import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function CardProducto({item}) {
  const navigate=useNavigate()

  return (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.image || "https://via.placeholder.com/180"} // img fallback
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Categoría: {item.category} <br />
              Precio: ${item.price} <br />
              Stock: {item.stock}
            </Card.Text>
            <Button variant="primary">Agregar al carrito</Button>

            <Button variant="dark" onClick={()=>navigate(`/item/${item.id}`)}>
              Ver mas
            </Button>
          </Card.Body>
        </Card>

  );
}
export default CardProducto