import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllcategoryAction } from '../../pages/category/CategoryAction'
import { Link } from 'react-router-dom'

export const CategoryTable = () => {
  const dispatch = useDispatch()
  const {catList} = useSelector((state)=>state.categoryInfo)
  useEffect(()=>{
 
   dispatch(getAllcategoryAction())


  },[dispatch])
  return (
   
    <div>
       <div className="text-center mb-2"> {catList.length} No of categories found!</div>
       {""}
         <Table striped bordered hover>
      <thead>
        <tr className='' >
          <th>No.</th>
          <th>Title</th>
          <th>status</th>
          <th>Slug</th>
          <th>Edit</th>
        </tr>
      </thead>
    
      <tbody>
      {catList.map(({_id, title, slug, status}, i)=>(
       <tr key={_id}>
      <td>{i + 1}</td>
      <td>{title}</td>
      <td className ={status ==="active" ? "text-success" : "text-danger"}>
         {status}
      </td>
      <td>{slug}</td>

      <td>
         <Button variant='warning' >
        <Link className="nav-link" to={`/edit-category/${_id}`}>
      Edit
        </Link>
        </Button>
      </td>
    </tr>
      ))}
       
      </tbody>
    </Table>
    </div>
  )
}
