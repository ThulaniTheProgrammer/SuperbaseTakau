import React from 'react'
import { Outlet, Link, Touchable } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CarName from '../../components/carName';
import Receipts from '../../components/receipts';
import FinalReceipt from '../../finalReceipt';
import { ImQrcode } from 'react-icons/im';
import Cart from '../../components/cart';
import SearchComponent from '../../components/searchComponet';
import { AiOutlineDown } from "react-icons/ai";
import SalesCard from '../../components/SalesCard';
import Curve from '../../components/graphs/Curve';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineUp } from "react-icons/ai";
import Stock from '../../components/Tables/Stock';

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
import AddProduct from './AddProduct';




export default function ManagerMain() {
  

    let navigate = useNavigate();
  return (
  <div className='h-screen  bg-purple-50'>
    <div className='flex justify-between mt-4 mb-10'>
<p className='text-3xl mx-6 text-red-500'>Japan Direct</p>

<div className='flex flex-col'>
  <div className='bg-black px-1 w-8 rounded-full mx-8'>
  </div>
  <Link to="/AddProduct " className='text-xl mr-8 bg-red-500 text-white rounded-xl px-2'>Add Product</Link>
</div>
    </div>
    
<div className='flex justify-between mr-6 '>
<div className='mx-4 w-0.1'>
       <ul className='text-black'>
       
       <li className='mb-1 flex items-center'>
          <MdOutlineHouse className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/">Menu</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiCreditCard2 className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Product">Orders</Link>
          </li>

          <li className='my-4 flex items-center'>
          <TbReport className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Product">Reports</Link>
          </li>
          
          <li className='my-4 flex items-center'>
          <AiOutlineStock  className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Product">Stock</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiSettings className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/SecondNav">Settings</Link>
          </li>

          <li className='my-4 flex items-center'>
          <FiUsers className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Adminstrator">Users</Link>
          </li>
          
         
        </ul>

       </div>
       <Stock />
</div>

    </div>   



  )
}