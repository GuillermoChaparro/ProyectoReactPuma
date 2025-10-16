import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';

function Checkout() {
  const { getTotal, cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;

    const order = {
      buyer: { email, name, phone },
      total: getTotal(),
      items: cart,
      date: serverTimestamp()
    };

    console.log("Orden generada:", order);
    // 🔥 acá podés agregar la lógica para guardar la orden en Firestore, por ejemplo:
    // addDoc(collection(db, "orders"), order);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="phone" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
}

export default Checkout;