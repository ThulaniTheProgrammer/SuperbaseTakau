import React from 'react'

export default function SalesCard() {
  return (
    <div  className=' bg-fuchsia-400 w-1/3 px-4 rounded-md mx-3 '>
    <div className='flex justify-between '>
    <p className='text-xl text-gray-600'>Orders</p>
    <p className='text-green-600'>+2.0%</p>
    </div>
    <div className='text-3xl pb-4'>$340</div>
    <div className='flex justify-between'>
        <p className='flex items-center underline text-gray-500'>View all Orders</p>
        <div className='bg-white p-5 rounded-3xl'></div>
    
    </div>
   
</div>
  )
}
