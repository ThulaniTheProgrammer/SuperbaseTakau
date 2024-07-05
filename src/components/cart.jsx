import React from 'react'

export default function Cart(props) {
  return (
   
  <div class="w-1/4  h-1/2 bg-red-200 p-4 m-4 flex flex-col justify-end rounded-lg">
  <div class="text-sm font-small text-gray-500 pb-2">{props.partname}</div>
  <div class="text-sm font-light text-gray-500 flex">
    <div className='rounded-full h-8 bg-slate-500 w-8'>
<p className='flex justify-center items-center text-center pt-1 text-white text-weight-500'>+</p>
    </div>
<p className='items-center flex justify-center px-2'>1</p>
    <div className='rounded-full h-8 bg-slate-500 w-8'>
<p className='flex justify-center items-center text-center pt-1 text-white'>-</p>
    </div>
  
  </div>
</div>
  )
}
