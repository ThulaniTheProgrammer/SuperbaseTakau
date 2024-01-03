import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeAdmin from './WelcomeAdmin';
import WelcomeManager from './WelcomeManager';
import { register } from '../redux/actions/userActions';
import supabase from '../superbase';


const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }





  return (
    <div className="flex items-center justify-center h-screen ">

     
    <form onSubmit={handleSubmit} className="w-3/4 p-6 bg-slate-900  shadow pb-40 pt-32 rounded-3xl">
    <div className='text-center bold text-white text-2xl  '>Takau Holdings Sign Up </div>
   

<div className='flex '>
    <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Name:</label>
        <input    input 
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange} className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />

      </div>
    

      
      </div>

    <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Password:</label>
        <input   input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange} className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />
      </div>


    <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Email:</label>

        <input input 
          placeholder='Email'
          name='email'
          onChange={handleChange} className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />

      </div>

      
    
      <div className=" text-white flex justify-center mt-20">
        <button type="submit"      className="px-4 py-2 bg-red-400 text-white rounded ">Sign Up</button>
        Already have an account?<Link to='/WelcomeManager'>Login</Link> 
      </div>
     </form>
  
  </div>
  )
}

export default SignUp;