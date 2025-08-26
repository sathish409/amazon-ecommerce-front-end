import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export const CustomCard = ({product }) => {
    const [index, setIndex] = useState(0);
console.log(product)

  return (
     <Card style={{ width: "10rem" }} className="p-2 shadow-lg flex-grow-1">
     {product.images?.length > 0 && (
        <Card.Img
          variant="top"
          src={`http://localhost:8000${product.images[index]}`}
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <Card.Body>
        <Card.Title>{product.producttype.slice(0, 10)}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 15)} 
        </Card.Text>
     
      </Card.Body>
    </Card>
 
 
  )
}



  //  <div className='custom-card shadow'> 
  //     <div className="card-img">
  //       <img src={thumbnail} alt="" />
  //     </div>
  //     <div className="card-details">
  //       <p>{producttype.slice(0, 10)}</p>
  //       <p>{description.slice(0, 50)}</p>
  //     </div>
  //   </div>