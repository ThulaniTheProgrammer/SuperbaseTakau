import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { managerlogin } from '../../redux/features/auth/authSlice';

export default function AddProduct() {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    const userData = { name, phone, password, email };
    dispatch(managerlogin(userData));

    // Additional logic after dispatching the action
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
              Name:
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

          <div className="flex flex-col flex-grow mt-8 w-1/2 ml-4">
            <label htmlFor="phone" className="mb-1 flex items-center text-white">
              Phone:
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="phone"
              name="phone"
              required
              className="w-full p-2 border border-gray-400 bg-slate-800 rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow mt-2 mb-2">
          <label htmlFor="password" className="mb-1 flex items-center text-white">
            Password:
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 border border-gray-400 bg-slate-800 rounded-xl"
          />
        </div>

        <div className="flex flex-col flex-grow mt-2 mb-2">
          <label htmlFor="email" className="mb-1 flex items-center text-white">
            Email:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-400 bg-slate-800 rounded-xl"
          />
        </div>

        <div className="text-white flex justify-center mt-20">
          
        </div>
      </form>
    </div>
  );
}