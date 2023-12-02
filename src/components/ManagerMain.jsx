import React from 'react'
import { Outlet, Link, Touchable } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CarName from './carName';
import Receipts from './receipts';
import FinalReceipt from '../finalReceipt';
import { ImQrcode } from 'react-icons/im';
import Cart from './cart';
import SearchComponent from './searchComponet';
import { AiOutlineDown } from "react-icons/ai";
import SalesCard from './SalesCard';
import Curve from './graphs/Curve';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineUp } from "react-icons/ai";
import Stock from './Tables/Stock';
import Product from '../pages/Products/Product';





export default function ManagerMain() {
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
    <div className='flex justify-between mb-10'>
<p className='text-3xl mx-4 text-black'>Takau</p>
<div className='bg-black px-2 rounded-full mx-8'></div>
    </div>
    
<div className='flex justify-between mr-6 font-semibold'>
<div className='mx-4 w-0.1'>
       <ul className='text-black'>
       
          <li className='my-1 bold '>
            <Link to="/Menu">Takau </Link>
          </li>
          <li className='my-4'>
            <Link to="/SecondNav">Orders</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Reports</Link>
          </li>
          <li className='my-4'>
            <Link to="/Product">Stock</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Settings</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Users</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Users</Link>
          </li>
          
         
        </ul>

       </div>
<div className='w-full'>
<div className='flex w-full h-32 rounded-md'>

<SalesCard/>
<SalesCard/>
<SalesCard/>     
</div>
<div className='flex flex-row mt-3  mb-10 '>
<div className='bg-slate-100 w-1/4 ml-3  rounded-xl'>
<div className='flex flex-bottom mx-4 text-lg mt-2 text-slate-400'>Total Balance</div>

<div className=''>
  <CircularProgressbar className='px-16 mt-10 flex justify-center' value={20}  text='76%' />
 <div className='text-center'>
    <p>Total Sales Made Today</p>
    <p>$450.00</p>
    <p className='text-gray-300 text-sm '>Previous transcation pertaining the last payment may not be included</p>
    </div>
 <div className='flex justify-between mx-4 mt-10'>
 <div className=''>
        <p className='text-gray-300'>Yesterday</p>
        <div className='flex flex-row'>
        <AiOutlineUp className='text-red-500 flex items-center' />
        <p className='text-red-500 flex items-center'>$250.00</p>
        </div>
    </div>
    <div className=''>
        <p className='text-gray-300'>Yesterday</p>
        <div className='flex flex-row'>
        <AiOutlineUp className='text-red-500 flex items-center' />
        <p className='text-red-500 flex items-center'>$250.00</p>
        </div>
    </div>
    <div className=''>
        <p className='text-gray-300'>Yesterday</p>
        <div className='flex flex-row'>
        <AiOutlineUp className='text-green-500 flex items-center' />
        <p className='text-green-500 flex items-center'>$250.00</p>
        </div>
    </div>
 </div>
</div>
</div>
<div className=' w-3/4 mx-3 rounded-xl bg bg-slate-300'>
<div>
    <Curve/>
  
</div>
</div>
</div>
</div>
</div>
<Stock />
    </div>   



  )
}