import React from 'react'
import Card from 'react-bootstrap/Card';

const ProductItem = (props) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>
        {props.item.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductItem
