import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import ItemCount from './itemCount';


function ItemDetail({item}) {

  return (
  
    <Container>
      <Row>
        <Col>
          <Image src={item?.thumbnail} rounded />
        </Col>
      
      <Col>
        <ListGroup>
            <ListGroup.Item>
                <h1>{item?.name}</h1></ListGroup.Item>
            <ListGroup.Item>{item?.description}</ListGroup.Item>
            <ListGroup.Item>{item?.description}</ListGroup.Item>
            <ListGroup.Item>{item?.description}</ListGroup.Item>
            <ListGroup.Item>${item?.price}</ListGroup.Item>
        </ListGroup>
        <ItemCount item={item}></ItemCount>
       </Col>
        </Row>
    </Container>

  )
}

export default ItemDetail; 