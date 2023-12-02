import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { managerlogin } from '../../redux/features/auth/authSlice';
import { createproduct } from '../../redux/features/products/productSlice';

export default function AddProduct() {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  const signature=user.signature;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [barcode, setBarcode] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [quantitySold, setQuantitySold] = useState('');
  const [quantityBought, setQuantityBought] = useState('');

  const submitForm = async (e) => {

    e.preventDefault();

dispatch(createproduct(name,brand,model,year,barcode,buyingPrice,sellingPrice,quantityBought,quantitySold,signature))
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Display loading, error, or success messages based on authentication state */}
      {isLoading ? (
        <h2>Loading....</h2>
      ) : isError ? (
        <h2>Error....</h2>
      ) : null}

      <form onSubmit={submitForm} className="w-3/4 p-6 bg-slate-100 shadow pb-40 pt-32 rounded-3xl">
        <div className="text-center bold text-black text-2xl">Takau Holdings Register Items</div>

        <div className="flex">
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Part Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setBrand(e.target.value)}
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
              onChange={(e) => setModel(e.target.value)}
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


      

        

        <div className="text-white flex justify-center mt-20">
          
        </div>
      </form>


<Link className='rounded bg-pink-400 py-4 px-4' to="/Product">Add Products</Link>

    </div>
  );
}