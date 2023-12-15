import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'surname', headerName: 'Surname', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 90 },
  { field: 'email', headerName: 'Email', type: 'number', width: 5 },
  
  {
    
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, name: '1', surname: 'Makeba', phone:'0787423492' ,email:'frankmakeba0@gmail.com' },

];

const headerClassName = 'font-bold';

export default function Adminstrator() {
  return (

    <div className="h-400 w-full">
        <div className='flex justify-between mt-4 mb-4 mx-4'>
            <div className='text-2xl text-red-500'>
               Takau Holdings  Redistered Cashier
            </div>
            
            
            <Link to="/AddAdministrator" className='rounded-lg flex font-bold items-center text-white bg-pink-400 px-5'>Add Admistrator</Link>
        </div>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerClassName, // Apply the headerClassName to each column
        }))}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}