import React from 'react'

export default function SalesCard(props) {
  return (
    <div  className=' bg-red-100 w-1/3 px-4 rounded-md mx-3 '>
    <div className='flex justify-between '>
    <p className='text-xl text-[#002F63]'>{props.Salename}</p>
    <p className='text-green-600'>+2.0%</p>
    </div>
    <div className='text-3xl pb-4 font-medium'>{props.Salenumber}</div>
    <div className='flex justify-between'>
        <p className='flex items-center underline text-[#002F63]'>View all Orders</p>
        <div className='text-white py-1 px-1 bg-red-200  rounded-3xl'>{props.Icon}</div>
    
    </div>
   
</div>
  )
}
