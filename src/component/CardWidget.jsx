import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CardWidget() {
  return (
    <Button variant="dark">
      🛒 <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CardWidget 

