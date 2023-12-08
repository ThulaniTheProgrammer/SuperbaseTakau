import React from 'react'
import { Outlet, Link, Touchable } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImQrcode } from 'react-icons/im';
import { AiOutlineDown } from "react-icons/ai";
import Product from '../pages/Products/Product';


export default function Loyout() {
  const colors = ["green","red","yellow"]
  function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
  }
  const randomNumber= getRandomNumber();
  console.log(colors[getRandomNumber()]);
  //colors[randomNumber()];

    let navigate = useNavigate();
  return (
  <div className='h-screen'>
     <div className='flex justify-between pt-4   w-full mb-8 mx-2'>
        <div className='flex flex-row w-3/4  justify-between'>
<div className='text-2xl font-bold text-white mr-12'>Takakou</div>
<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 '>
<h3 className='text-white items-center  flex justify-start pt-1'>  <ImQrcode className='pr-2 w-8' /> 
<input
        type="text"
        placeholder="Search Car Part"
        className='bg-black outline-black  focus:outline-none'

      />
 </h3>
</div>

<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-black mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-black outline-black  focus:outline-none'

      />

<AiOutlineDown  className='pr-2 w-8 flex justify-end ' /> 

 </h3>
</div>


<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-black mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-black outline-black  focus:outline-none'

      />

<AiOutlineDown  className='pr-2 w-8 flex justify-end ' /> 

 </h3>
</div>


<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-black mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-black outline-black  focus:outline-none'

      />

<AiOutlineDown  className='pr-2 w-8 flex justify-end ' /> 

 </h3>
</div>


       </div>
       <div className='rounded-lg border  bg-slate-600  w-1/6 mx-8 bold text-center items-center flex justify-center bold text-white'>ADD</div>

    </div>



<div className='flex justify-between mr-6 font-semibold'>
<div className='mx-4'>
       <ul className='text-white'>
          <li className='my-4'>
            <Link to="/Menu">Menu</Link>
          </li>
          <li className='my-4'>
            <Link to="/SecondNav">Orders</Link>
          </li>
          <li className='my-4'>
            <Link to="/ManagerMain">Reports</Link>
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
        </ul>

   </div>
 










    </div>

    
   
</div>
  )
}
