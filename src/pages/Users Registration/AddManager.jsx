import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { managerlogin } from '../../redux/features/auth/authSlice';
import { createproduct } from '../../redux/features/products/productSlice';

export default function AddAdministrator() {

 const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const [name, setname] = useState("")
  const [brand, setbrand] = useState("")
  const [model, setmodel] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")
  const [buyingPrice, setBuyingPrice] = useState("")
  const [barcode, setBarcode] = useState("")
  const [quantityBought, setQuantityBought] = useState("")
  const [quantitySold, setQuantitySold] = useState("")
  const [year, setYear] = useState("")
  const [shelfNumber, setShelfNumber] = useState("")

 
  const signature=user.signature;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*
  useEffect(() => {
   
    if (isSuccess||user) {
    navigate("/Mainheader")
    }
   
    
  
    }, [user,isError,isSuccess,message,navigate,dispatch])
    */

  return (
   
    <div className="flex items-center justify-center h-screen">
      {/* Display loading, error, or success messages based on authentication state 
      {isLoading ? (
        <h2>Loading....</h2>
      ) : isError ? (
        <h2>Error....</h2>
      ) : null}
*/
      }
      <form className="w-3/4 p-6 bg-slate-100 shadow pb-40 pt-32 rounded-3xl">
        <div className="text-center bold text-black text-2xl">Takau Holdings Register Administator</div>

        <div className="flex">
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
               Name:
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
             Surname:
            </label>
            <input
onChange={(e)=>setbrand(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
         
         
        
        

        </div>

       <div className="flex">
       <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Email:
            </label>
            <input
onChange={(e)=>setmodel(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Phone:
            </label>
            <input
              onChange={(e) => setYear(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
         
        </div>
        <div >
          <Link className='flex justify-center mt-10 rounded-3xl  bg-pink-700 text-white font-bold py-4 px-4' to="">Add Manager</Link>
    
          </div>

        

         </form>




    </div>
  );
}
