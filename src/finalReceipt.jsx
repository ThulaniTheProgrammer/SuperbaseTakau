import React from 'react'

export default function FinalReceipt(props) {
  return (
    <div className='w-400 h-96  bg-slate-900 pr-4  rounded-2xl   mt-2 text-white'>
    <div className='justify-between flex pt-2 px-2'>
      <p>Total</p>
      <p>$30</p>
    </div>

    <div className='justify-between flex pt-2 px-2'>
      <p>Subtotal</p>
      <p>$30</p>
    </div>

    <div className='flex  justify-between items-center  pt-1 mt-20 px-2'>
      <p>..........................</p>
      <p>..................................</p>
    </div>

    <div className='justify-between flex pt-2 px-2 text-3xl'>
      <p >Subtotal</p>
      <p>$30</p>
    </div>

<div className='flex flex-row justify-between'>
    <div className='justify-between flex pt-2 px-2 text-3xl'>
    <div className='border border-slate-400 py-10 px-10  rounded-2xl' ></div>
    </div>

    <div className='justify-between flex pt-2 px-2 text-3xl'>
    <div className='border border-slate-400 py-10 px-10  rounded-2xl ' ></div>
    </div>

    <div className='justify-between flex pt-2 px-2 text-3xl'>
    <div className='border border-slate-400 py-10 px-10  rounded-2xl' ></div>
    </div>

    </div>
    <div className='border border-slate-400 py-3 px-3 mt-4 text-center  rounded-2xl' >
        <p>Confirm Payment</p>
    </div>
 </div>

 
 
  )
}
