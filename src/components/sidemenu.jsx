import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidemenu() {
  return (
   <div className='mx-4'>
       <ul>
          <li className='my-4'>
            <Link to="/">Menu</Link>
          </li>
          <li className='my-4'>
            <Link to="/SecondNav">Orders</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Reports</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Stock</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Settings</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Users</Link>
          </li>
        </ul>

   </div>
  )
}
