import React from 'react'

export default function Receipts(props) {
  return (
    <div className='w-200 h-auto bg-slate-900 pr-4  rounded-2xl py-3  mt-2 '>
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
<p className='text-black-100 bg-white rounded-full w-8 ml-4  text-center'>1</p>
<p className='text-gray-100 px-2 w-32'>{props.partName}</p>
</div>
    <div>
<p className=' text-gray-100 flex flex-col justify-end'>{props.amount}</p>
    </div>
 </div>
 </div>
 
  )
}
