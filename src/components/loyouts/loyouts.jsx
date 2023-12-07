import React from 'react'
import { Outlet, Link, Touchable } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Manager from '../../pages/Users Registration/Manager';

import { ImQrcode } from 'react-icons/im';


import { AiOutlineDown } from "react-icons/ai";

import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineUp } from "react-icons/ai";


import { CiCreditCard2 } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineHouse } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";




export default function Loyouts() {
  const colors = ["green","red","yellow"]
  function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
  }
  const randomNumber= getRandomNumber();
  console.log(colors[getRandomNumber()]);
  //colors[randomNumber()];

    let navigate = useNavigate();
  return (
  <div className='h-screen  bg-purple-50'>
    <div className='flex justify-between mt-4 mb-10'>
<p className='text-3xl mx-6 text-red-500'>Japan Direct</p><div className='flex flex-col'>
 
  
</div>
    </div>
    
<div className='flex justify-between mr-6 font-semibold'>
<div className='mx-4 w-0.1'>
       <ul className='text-black'>
       
       <li className='mb-4 flex items-center'>
          <MdOutlineHouse className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/ManagerMain">Menu</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiCreditCard2 className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Stock">Orders</Link>
          </li>

          <li className='my-4 flex items-center'>
          <TbReport className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Product">Reports</Link>
          </li>
          
          <li className='my-4 flex items-center'>
          <AiOutlineStock  className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Stock">Stock</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiSettings className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/SecondNav">Settings</Link>
          </li>

          <li className='my-4 flex items-center'>
          <FiUsers className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Manager">Users</Link>
          </li>
          
         
        </ul>

       </div>
<div className='w-full'>




</div>
</div>
    </div>   



  )
}