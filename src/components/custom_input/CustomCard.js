import React from 'react'
import Card from 'react-bootstrap/Card';

export const CustomCard = ({thumbnail,producttype,description }) => {
  return (
    <div> <Card style={{ width: "12rem" }} className="shadow-lg flex-grow-1">
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{producttype.slice(0,20)}</Card.Title>
      <Card.Text>
      {description.slice(0, 50)}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}
