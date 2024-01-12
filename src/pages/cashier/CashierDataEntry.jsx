import React, { useState } from 'react';
import Cart from '../../components/cart';
import CarName from '../../components/carName';
import { CiCreditCard2 } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineHouse } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Receipts from '../../components/receipts';
import FinalReceipt from '../../finalReceipt';
import ManagerMain from '../../components/ManagerMain';
import Stock from '../../components/Tables/Stock';
import { createClient } from '@supabase/supabase-js';

let productList = [];

const products = [
  {
    carname: 'Toyota',
    model: 'aqua',
    partname: 'gearbox',
    price: 100
  },
  {
    carname: 'Mitsubishi',
  },
  {
    carname:'191',
  },
  {
    carname: 'Ford',
    model: 'Ranger',
    partname: 'Washers',
    price: 10
  },
  {
    carname: 'Mazda',
    model: '323',
    partname: 'body',
    price: 50
  }
];

export default function CashierDataEntry() {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [productName, setProductName] = useState('');
  const [productModel, setProductModel] = useState('');
  const [partName, setPartName] = useState('');
  const [partPrice, setPartPrice] = useState('');
  const [productQuantity,setProductQuantity] = useState('');
  const [multiplied, setMultiplied] = useState('');

  const handlePrint = () => {
    window.print();
    window.location.reload();
  };


  function productListing(datas) {
    productList.push(datas);
    setCurrentProduct([...productList]);
    setProductName('');
    setProductModel('');
    setProductQuantity('');
    setPartName('');
    setPartPrice('');
    console.log(productList);
    setMultiplied(datas.price*datas.quantity);
    console.log(multiplied);
  }

  const colors = ["green","red","yellow"]
  function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
  }
  const randomNumber= getRandomNumber();
  console.log(colors[getRandomNumber()]);
  //colors[randomNumber()];


  const handleRemove = (index) => {
    const updatedProductList = [...currentProduct];
    updatedProductList.splice(index, 1);
    setCurrentProduct(updatedProductList);
  };
// Initialize Supabase client
const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');


const handlePrintClick = async () => {
  for (let product of currentProduct) {
    const order = {
      name: product.name,
      model: product.model,
      quantity: product.productQuantity,
      partName: product.partName,
   
    };

    let { error } = await supabase
      .from('Orders')
      .insert([order]);
window.print();
    if (error) console.log("Error: ", error);
  }
};






  return (
    <div>
      <div className='flex justify-between items-center'>
      <p className='text-2xl font-bold ml-6  text-red-500'>Japan Direct</p>
        <div>
          <input
            onChange={(e) => setProductName(e.target.value)}
            list='productss'
            type='text'
            className='w-80 border rounded-xl text-yellow-100 border-slate-500 h-12'
            placeholder='Search Car Part'
            value={productName}
          />
          <datalist id='productss'>
            {products.map((product, index) => (
              <option key={index} value={product.carname}></option>
            ))}
          </datalist>
        </div>
        <div>
          <input
            list='late'
            type='text'
            onChange={(e) => setProductModel(e.target.value)}
            placeholder='model'
            className='bg-white border border-slate-500 p-2  rounded-xl outline-white  focus:outline-none'
            value={productModel}
          />
          <datalist id='late'>
            {products.map((product, index) => (
              <option key={index} value={product.model}></option>
            ))}
          </datalist>
        </div>

        <div>
          <input
            list='later'
            type='text'
            onChange={(e) => setPartName(e.target.value)}
            placeholder='part name'
            className='bg-white border border-slate-500 p-2  rounded-xl outline-white  focus:outline-none'
            value={partName}
          />
          <datalist id='later'>
            {products.map((product, index) => (
              <option key={index} value={product.partname}></option>
            ))}
          </datalist>
        </div>

        <div>
          <input   onChange={(e) => setProductQuantity(e.target.value)}
            type='number'
            placeholder='QUANTITY'
            className='bg-white border border-slate-500 p-2  rounded-xl outline-white  focus:outline-none'
            value={productQuantity}
            
          />
        </div>

        <button
          className='text-white bg-slate-500 rounded-md p-2 font-bold'
          onClick={() =>
            productListing({
              id: Date.now(),
              name: productName,
              productQuantity: productQuantity,
              model: productModel,
              price: products.find(({carname})=> carname ==productName).price,
              partName: partName,
              multiplied: multiplied,
            })
          }
        >
          Add
        </button>
        

 <button  className='text-white bg-slate-500 rounded-md p-2 font-bold' onClick={handlePrintClick}>Print</button>

      </div>

 <div className='flex'>

  <div className='w-2/10 mr-12'>
  <ul className='text-black '>

<li className='mb-4 flex items-center'>

      
          </li>

       <li className='mb-4 flex items-center'>
          <MdOutlineHouse className='pr-1 w-10 h-6 text-purple-400' />
        
            <Link to="/">Home</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiCreditCard2 className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Orders">Orders</Link>
          </li>

          <li className='my-4 flex items-center'>
          <TbReport className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/ManagerMain">Reports</Link>
          </li>
          
          <li className='my-4 flex items-center'>
          <AiOutlineStock  className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Stock">Stock</Link>
          </li>

          <li className='my-4 flex items-center'>
          <CiSettings className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/">Settings</Link>
          </li>

          <li className='my-4 flex items-center'>
          <FiUsers className='pr-1 w-10 h-6 text-purple-400' />
            <Link to="/Adminstrator">Users</Link>
          </li>
          
         
        </ul>

  </div>
      <div class="flex    flex-wrap  h-80  justify-center ">
  
  <CarName carname="Toyota" />
  <CarName carname="mazda"/>
  <CarName carname="Nissan"/>
  <CarName carname="Honda fit"/>
  <CarName carname="Xtrail"/>
  <CarName carname="Isuzu"/>
  <CarName carname="Rav 4"/>
  <CarName carname="Misthubishi"/>
  <CarName carname="Ford"/>
 
   
 
   <div class="border border-slate-400   w-3/4"></div>
 <Cart partname="Toyota Vits 2003 Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Steering" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Mazda Gearbox" colorname={colors[getRandomNumber()]} />
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 <Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
 
 </div>
<div className='w-1/4'>

< FinalReceipt/>

{currentProduct.map((product, index) => (
        <div className='flex justify-end'  key={index}>

         
          
          <div id='print-content'  className='w-80 h-10   bg-slate-900 pr-4  rounded-2xl  mt-2 text-white'>
           

            <div className='justify-between  items-center flex font-semibold pt-2 px-2'>
              <p className='flex text-start justify-start w-8'>{product.name}</p>

              <p className='flex text-start justify-start  w-8'>{product.model}</p>
              <p className=' flex text-start justify-start  w-2 '>{product.productQuantity}</p>
              <p className='flex text-start justify-start  w-8'>{product.partName}</p>
              <p>${product.price*product.productQuantity}</p>
              <button onClick={() => handleRemove(index)}>Remove</button> 
            </div>
          </div>
        </div>
      ))}


</div>



 </div>
 
 
 
 
 
 
 



     

<style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #print-content, #print-content * {
              visibility: visible;
            }
          }
        `}
      </style>


    </div>
  );
}