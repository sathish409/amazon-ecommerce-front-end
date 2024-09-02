import Form from 'react-bootstrap/Form';
import React from 'react'

export const CustomInput=({label, passRef, ...rest})=> {
  return (
    <Form.Group className='mb-2'>
        <Form.Label>{label}</Form.Label>
        <Form.Control { ...rest} ref={passRef} />
     
    </Form.Group>
  );
}
