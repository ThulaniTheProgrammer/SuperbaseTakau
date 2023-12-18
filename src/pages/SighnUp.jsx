import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';

import { useDispatch, useSelector } from 'react-redux';
import WelcomeAdmin from './WelcomeAdmin';
import WelcomeManager from './WelcomeManager';
import { register } from '../redux/actions/userActions';

export default function SighnUp() {
  const userSignin= useSelector(state=>state.userSignin);
  const {userInfo,loading,success,error}= userSignin
    const navigate = useNavigate();
    const dispatch = useDispatch();


const [name, setname] = useState("");
const [surname, setsurname] = useState("");
const [phone, setphone] = useState("");
const [password, setpassword] = useState("");
const [email, setemail] = useState("")
async function submitForm(e) {
  e.preventDefault()



    dispatch(register(name,surname,phone,email,password))
  

  
   
  }
 
  
  useEffect(() => {
   
    if (userInfo) {
      navigate("/Mainheader")
    }
    
    //dispatch(reset())
    }, [userInfo,navigate,dispatch])
    
   // onClick={() => navigate("/Mainheader")}  
   

  return (
    <div className="flex items-center justify-center h-screen ">

     {
   
    loading ? <h2>
        Loading....
      </h2> :
      error ? <h2>
        Error....
      </h2>
      : null
     
     }
    <form onSubmit={submitForm} className="w-3/4 p-6 bg-slate-900  shadow pb-40 pt-32 rounded-3xl">
    <div className='text-center bold text-white text-2xl  '>Takau Holdings Sign Up </div>
   

<div className='flex '>
    <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Name:</label>
        <input    onChange={(e)=>setname(e.target.value)}  type="text" id="password" name="password" required className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />

      </div>
    <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Surname:</label>
        <input    onChange={(e)=>setsurname(e.target.value)}  type="text" id="password" name="password" required className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />

      </div>


      <div className="flex flex-col flex-grow mt-8  w-1/2 ml-4">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Phone:</label>
        <input    onChange={(e)=>setphone(e.target.value)}  type="text" id="password" name="password" required className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />
      </div>
      </div>

    <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Password:</label>
        <input    onChange={(e)=>setpassword(e.target.value)}  type="password" id="password" name="password" required className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />
      </div>


    <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Email:</label>

        <input    onChange={(e)=>setemail(e.target.value)}  type="email" id="password" name="password" required className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />

      </div>

      
    
      <div className=" text-white flex justify-center mt-20">
        <button type="submit"      className="px-4 py-2 bg-red-400 text-white rounded ">Log In</button>
       
      </div>
     </form>
  </div>
  )
}


//onClick={() => navigate("/Mainheader")}