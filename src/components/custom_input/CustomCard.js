import React from 'react'
import Card from "react-bootstrap/Card";

export const CustomCard = ({thumbnail,producttype,description }) => {
  return (
     <Card style={{ width: "10rem" }} className="p-2 shadow-lg flex-grow-1">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{producttype.slice(0, 10)}</Card.Title>
        <Card.Text>
          {description.slice(0, 15)} 
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