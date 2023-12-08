import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';
import { adminlogin, managerlogin, reset } from '../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';




export default function WelcomeAdmin() {
  const {user,isLoading,isError,isSuccess,message}= useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
async function submitForm(e) {
  e.preventDefault()

    const userData={email,password}
    dispatch(adminlogin(userData))
  

  
   
  }
  useEffect(() => {
  
    if (isSuccess||user) {
      navigate("/Mainheader")
    }
    
    
    }, [user,isError,isSuccess,message,navigate,dispatch])
    
   // onClick={() => navigate("/Mainheader")}  

  return (
    <div className="flex items-center justify-center h-screen ">

    
    <form onSubmit={submitForm} className="w-3/4 p-6 bg-slate-800  shadow pb-40 pt-32 rounded-3xl">
    <div className='text-center bold text-white text-2xl'>Hello Adminstrator</div>
    <div className='text-center mb-4 bold text-white text-sm '>Welcome to Takau Holdings</div>
    <div className='text-center mb-4 bold text-white text-sm '>
      
      {
       ///This is subject to change.I have done this as an example of how do it with Redux you can do it in the way you are comfortable with.
       isLoading ? <h2>
         Loading....
       </h2> :
      isError ? <h2>
       {message}
       </h2>
       : null
      }
     </div>
      <div className="flex  justify-center">
      
        <label htmlFor="username" className="mb-1 flex items-center text-white">Email:</label>
        <input onChange={(e)=>setemail(e.target.value)} type="text" id="username" name="username" required className="w-3/4 p-2 border border-black rounded" />
      </div>
      <div className="flex  justify-center mt-8 mb-8">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Password:</label>
        <input    onChange={(e)=>setpassword(e.target.value)}  type="password" id="password" name="password" required className="w-3/4 p-2 border border-black rounded" />
      </div>
      <div className=" text-white flex justify-center">
        <button type="submit"      className="px-4 py-2 bg-red-400 text-white rounded ">Log In</button>
      </div>
     </form>
  </div>
  )
}

//onClick={() => navigate("/ManagerMain")}