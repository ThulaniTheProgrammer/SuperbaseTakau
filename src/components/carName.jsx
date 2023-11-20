import React from 'react'

export default function CarName({colorname,carname}) {
  ///console.log(props.colorname);
  console.log(colorname)
  return (
    <div class="w-1/4 h-1/2 bg-gray-200 p-4 m-4 flex flex-col justify-end rounded-lg">
    <div class="mt-auto">{carname}</div>
    <div class="mt-auto">{colorname}</div>
    <div class="text-sm font-light text-gray-500">12 models</div>
  </div>
  )
}
