import React from 'react'


export const CustomCard = ({thumbnail,producttype,description }) => {
  return (
    <div className='custom-card shadow'> 
      <div className="card-img">
        <img src={thumbnail} alt=""  width={100} />
      </div>
      <div className="card-details">
        <p>{producttype.slice(0, 10)}</p>
        <p>{description.slice(0, 50)}</p>
      </div>
    </div>
  )
}
