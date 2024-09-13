import React from 'react'


export const CustomCart = ({thumbnail,quantity, producttype,discountPrice, productname, price,discount}) => {
  return (
    <div className="d-flex">
    <img src={thumbnail} alt="" />
    <div className="item-details d-flex">

    <ul className='list'>
        <li>
            <h5>{productname}
            </h5>
            </li>
        <li> 
          {quantity}  Available in Stock
        </li>
        <li className='qty mt-2'>QTY:
    <input type="number" />
        </li>
        <li>{price}</li>
    </ul>
    <div className="">
    <p>{discountPrice}$</p>
    </div>
    </div>
  
  
</div>

      
 

  )
}
