import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';
import { Link } from 'react-router-dom';
import SighnUp from './SighnUp';
import { signin } from '../redux/actions/userActions';

import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://zpuplawsjodqxxfqxchz.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM'
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    
    password: ''
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
    
  })

    


      if (error) throw error;
      // Perform necessary actions with user data

      navigate('/CashierDataEntry');
    } catch (error) {
      alert(error.message);
    }
  }





  return (
    <div className='px-10 py-10  bg-[#002F63]  h-screen'>
    <div className="flex  flex-col lg:flex-row">

   <div className='flex justify-center w-full lg:w-1/2 lg:rounded-tl-xl lg:rounded-bl-xl px-4 py-3  bg-[#fffffD]'>
    <form onSubmit={handleSubmit}>
    <div className='flex pt-20 justify-start'>
    <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo.png" width={100} alt="Japan Direct Logo" />
     
    </div>
    <div className='text-center bold text-red-500 text-2xl  '></div>
    <div className='text-center mb-4 bold text-[#002F63]  text-sm '>
      <br />
      {
        
       ///This is subject to change.I have done this as an example of how do it with Redux you can do it in the way you are comfortable with.
      
       
      }
     </div>
     <div className='text-4xl  text-[#002F63] font-light'>Hello,</div>
     <div className='text-4xl  text-red-500 font-bold pb-4'>Welcome!</div>
      <div className="flex flex-col flex-grow mt-2 mb-2">
      
        <label htmlFor="username" className="mb-1 flex  items-center text-[#002F63] ">Email:</label>
         <input
    placeholder="Email"
    name="email"
    onChange={handleChange}
  required className="w-full p-2 border flex-grow  border-gray-400 bg-slate-800  rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-[#002F63]  ">Password:</label>
        <input
    placeholder="Password"
    name="password"
    type="password"
    onChange={handleChange} className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />
    
      </div>
      <div className=" text-[#002F63] pt-10  flex justify-center">
        <p className='flex items-center text-red-500'>Do you have account?</p>
        <button className='flex items-center' onClick={() => navigate("/SighnUp")} >Sign Up</button>
        <button type="submit" className="px-4 py-2 bg-red-600 text-white font-semibold  rounded ">Log In</button>
      </div>
     </form>
     </div>

      <div className='flex w-full lg:w-1/2 lg:rounded-tr-xl lg:rounded-br-xl sm:bg-green-400!important   bg-[#fffff0]'>
       
     <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Hondafit.png" style={{ marginTop: '150px' }} alt="Image" class="img-fluid"/>
       
     </div>
   
  </div>
  </div>
  
  )
}
export default Login
