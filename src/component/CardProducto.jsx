import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto({item}) {
  return (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.images || "https://via.placeholder.com/180"} // img fallback
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Categoría: {item.categoria} <br />
              Precio: ${item.precio} <br />
              Stock: {item.stock}
            </Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
        </Card>

  );
}
export default CardProducto