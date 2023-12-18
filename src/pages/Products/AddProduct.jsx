import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createproduct } from '../../redux/actions/productsActions';

export default function AddProduct() {

 
 const products= useSelector((state)=>state.createProduct);

 const {loading,error}=products
 console.log(error,loading);
 

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
  const [image, setImage] = useState({})

 
  //const signature=user.signature;
  const navigate = useNavigate();
 const dispatch = useDispatch();




  
console.log(image);
function submit(e) {
  e.preventDefault()
 
  dispatch(createproduct(name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,image))
navigate("/Product")
}

  return (
   
    <div className="flex items-center justify-center h-screen">
  
      <form  onSubmit={submit} className="w-3/4 p-6 bg-slate-100 shadow pb-40 pt-32 rounded-3xl">

        <div className="text-center bold text-black text-2xl">Takau Holdings Register Items</div>


        <div className="flex">
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Part Name:
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
             Brand:
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
              Model:
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
              Year:
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

<div className="flex">
<div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
          Buying Price:
            </label>
            <input
              onChange={(e) => setBuyingPrice(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
           Selling Price:
            </label>
            <input
              onChange={(e) => setSellingPrice(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
           Quantity Bought:
            </label>
            <input
              onChange={(e) => setQuantityBought(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
          Quantity Sold:
            </label>
            <input
              onChange={(e) => setQuantitySold(e.target.value)}
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
              Barcode:
            </label>
            <input
              onChange={(e) => setBarcode(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">

              Shelf Number:
            </label>
            <input
              onChange={(e) => setShelfNumber(e.target.value)}

              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">

              Image:
            </label>
            <input
                  onChange={(e)=>setImage(e.target.files[0])}

              type="file"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
         <button>
          Add Product
         </button>
          </div>

       
      
         
        
       
        </div>

        

        <div className="text-white flex justify-center mt-20">
          
        </div>
      </form>


<Link className='rounded bg-pink-400 py-4 px-4' to="/Product">Add Products</Link>

    </div>
  );
}
