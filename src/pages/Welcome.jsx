import React from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';




export default function Welcome() {
    const navigate = useNavigate();
const BASE_URL='https://takau-backend-master.onrender.com/';
    

  return (
    <div className="flex items-center justify-center h-screen ">
     
    <form className="w-3/4 p-6 bg-slate-800  shadow pb-40 pt-32 rounded-3xl">
    <div className='text-center mb-4 bold text-white text-2xl  '>Welcome to Takau Holdings</div>
      <div className="flex  justify-center">
      
        <label htmlFor="username" className="mb-1 flex items-center text-white">Email:</label>
        <input type="text" id="username" name="username" required className="w-1/2 p-2 border border-black rounded" />
      </div>
      <div className="flex  justify-center mt-8 mb-8">
        <label htmlFor="password" className="mb-1 lex items-cente text-white ">Password:</label>
        <input type="password" id="password" name="password" required className="w-1/2 p-2 border border-black rounded" />
      </div>
      <div className=" text-white flex justify-center">
        <button type="submit"  onClick={() => navigate("/Mainheader")}   className="px-4 py-2 bg-red-400 text-white rounded ">Log In</button>
      </div>
     </form>
  </div>
  )
}
