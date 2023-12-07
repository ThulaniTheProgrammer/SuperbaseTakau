import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getproducts } from '../../redux/features/products/productSlice';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Car Name', width: 130 },
  { field: 'brand', headerName: 'Part Name', width: 130 },
  { field: 'model', headerName: 'Model', width: 90 },
  { field: 'year', headerName: 'Year', type: 'number', width: 5 },
  { field: 'buyingPrice', headerName: 'BuyingPrice', type: 'number', width: 5 },
  { field: 'sellingPrice', headerName: 'SellingPrice', type: 'number', width: 90 },
  { field: 'barcode', headerName: 'Barcode',  width: 90 },
  {
    
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, name: 'Toyota', firstName: '', age: 35 },
  { id: 2, name: 'Mitsubishi', firstName: '', age: 42 },
  { id: 3, name: 'Mazda', firstName: '', age: 45 },
  { id: 4, name: 'Nissan', firstName: '', age: 16 },
  { id: 5, name: 'Ford', firstName: '', age: null },
  { id: 6, name: 'Honda', firstName: null, age: 150 },
  { id: 7, name: 'Hundai', firstName: '', age: 44 },
  { id: 8, name: '', firstName: '', age: 36 },
  { id: 9, name: '', firstName: '', age: 65 },
];

const headerClassName = 'font-bold';

export default function Product() {
  const [name, setname] = useState("Gear Box");
  const {data,error,loading,success}= useSelector((state)=>state.products);

  const [brand, setbrand] = useState("Toyota Aqua");
  const [model, setmodel] = useState("V1");
  const [year, setyear] = useState("2012");
  const [barcode, setbarcode] = useState("1234587859403as127");
const dispatch= useDispatch();


useEffect(()=>{
dispatch(getproducts(name,brand,model,year,barcode))
},[])
 
  return (

    <div className="h-400 w-full">
        <div className='flex justify-between mt-4 mb-4 mx-4'>
            <div className='text-2xl'>
               Takau Holdings 
            </div>
            
            <Link to="/AddProduct" className='rounded-lg flex items-center bg-pink-400 px-5'>Add Products</Link>
        </div>
        {
          /*
          loading ? <h2>
            Loading.....
          </h2> :
          error ? <h2>Error....</h2>:
          data.map((item)=>{

          })
          */
        }
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