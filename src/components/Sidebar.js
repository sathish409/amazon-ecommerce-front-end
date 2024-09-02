import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
    const {user}= useSelector((state)=>state.userInfo)
  return (
    <div className='side-bar p-2'>
        <div className="top mt-2">
            Hello, {user.fname}
        </div>
        <div className="bottom mt-5">
        <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/dashboard">Dashboard</Link>
                </li>
            </ul>
                
            <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/category">Category</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className='nav-link d-flex align-items-center gap-2 ' to="/product">Product</Link>
                </li>
            </ul>
                
            <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/payment-option">Payment Option</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/order">Order</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/customer">Customer</Link>
                </li>
            </ul>
     
            <ul>
                <li>
                    <Link className='nav-link  d-flex align-items-center gap-2 ' to="/profile">My Profile</Link>
                </li>
            </ul>
        </div>


    </div>
  )
}
