import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';
import { Link } from 'react-router-dom';
import SighnUp from './SighnUp';
import { signin } from '../redux/actions/userActions';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhszkduaylkozvldeujt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc3prZHVheWxrb3p2bGRldWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MzA2NDYsImV4cCI6MjAxOTIwNjY0Nn0.IlASwr44Bxry1t4aDJe2StFfV11wE25rJIKQhPc0AG8';


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

      navigate('/ManagerMain');
    } catch (error) {
      alert(error.message);
    }
  }





  return (
    <div className="flex items-center justify-center h-screen ">

  
    <form onSubmit={handleSubmit}  className="w-3/4 p-6 bg-slate-800  shadow pb-40 pt-32 rounded-3xl">
   
    <div className='text-center bold text-white text-2xl '>Welcome to Takau Holdings</div>
    <div className='text-center mb-4 bold text-white text-sm '>
      <br />
      {
        
       ///This is subject to change.I have done this as an example of how do it with Redux you can do it in the way you are comfortable with.
      
       
      }
     </div>
      <div className="flex flex-col flex-grow mt-2 mb-2">
      
        <label htmlFor="username" className="mb-1 flex  items-center text-white">Email:</label>
         <input
    placeholder="Email"
    name="email"
    onChange={handleChange}
  required className="w-full p-2 border flex-grow  border-gray-400 bg-slate-800  rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Password:</label>
        <input
    placeholder="Password"
    name="password"
    type="password"
    onChange={handleChange} className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />
    
      </div>
      <div className=" text-white flex justify-center">
        <p className='flex items-center'>Do you have account?</p>
        <p className='flex items-center' onClick={() => navigate("/SighnUp")} >Sighn Up</p>
        <button type="submit" className="px-4 py-2 bg-red-400 text-white rounded ">Log In</button>
      </div>
     </form>
     Don't have an account? <Link to="/signup">Sign Up</Link>
  </div>
  )
}
export default Login