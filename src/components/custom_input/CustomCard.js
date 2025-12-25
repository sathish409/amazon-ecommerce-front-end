import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export const CustomCard = ({ product }) => {
  const [index, setIndex] = useState(0);
  console.log(product);

  return (
    <Card style={{ width: "12rem" }} className="p-3 shadow h-100 flex-grow-1">
      {product.images?.length > 0 && (
        <Card.Img
          variant="top"
          src={`http://localhost:8000${product.images[index]}`}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      )}
      <Card.Body className="p-4">
        <Card.Title>{product.producttype.slice(0, 10)}</Card.Title>
        <Card.Text className="flex-grow-1">
          {product.description.slice(0, 12)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

//  <div className='custom-card shadow'>
//     <div className="card-img">
//       <img src={thumbnail} alt="" />
//     </div>
//     <div className="card-details">
//       <p>{producttype.slice(0, 10)}</p>
//       <p>{description.slice(0, 50)}</p>
//     </div>
//   </div>
