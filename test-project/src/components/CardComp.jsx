import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImg from './img/myImg.jpg'

function CardComp() {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={myImg} style={{ height: '180px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title className='text-md-start'>Card Title</Card.Title>
        <Card.Text style={{ textAlign: 'left' }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;