import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const AddProduct = () => {

    const [PartName, setPartName] = useState('');
    const [CarName, setCarName] = useState('');
    const [Model, setModel] = useState('');
    const [Year, setYear] = useState('');
    const [SellingPrice, setSellingPrice] = useState('');
    const [Barcode, setBarcode] = useState('');
    const [ShelfNumber, setShelfNumber] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        PartName,
        CarName,
        Model,
        Year,
  SellingPrice,
  Barcode,
  ShelfNumber
    };
    const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

    // Insert the data into the Superbase table
    const { data, error } = await supabase
      .from('Takau')
      .insert([formData]);
      window.location.reload();
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }

    // Reset the form fields
    setPartName('');
    setCarName('');
    setModel('');
    setYear('');
    setSellingPrice('');
    setBarcode('');
    setShelfNumber('');
  };


  return (
    <div className='flex text-xl bg-purple-50  items-center justify-center h-screen '>
      
    <form onSubmit={handleSubmit} className='bg-red-100 p-10 rounded-2xl'>
      <p className='flex justify-center text-3xl text-red-500 font-bold mb-10'>Register Products</p>
      <div className='flex text-#002F63 flex-row'>
      <label className='text-#002F63'>
        PartName: <br />
        <input className=' rounded-xl py-1  w-80' type="text" value={PartName} onChange={(e) => setPartName(e.target.value)} />
      </label>
      <br />
      <label className='mx-10 text-#002F63'>
        CarName: <br />
        <input  className='rounded-xl  py-1  w-80' type="text" value={CarName} onChange={(e) => setCarName(e.target.value)} />
      </label>
    
      </div>
      <div className='flex flex-row'>
      <label className='w-full text-#002F63'>
        Model:<br/>
        <input  className='rounded-xl  py-2 w-80' type="text" value={Model} onChange={(e) => setModel(e.target.value)} />
      </label>
      <br />
        <label  className='mx-10 text-#002F63'>
            Year:<br/>
            <input  className='rounded-xl  py-2 w-80' type="number" value={Year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        </div>
        <div className='flex flex-row'>
        <label className='text-#002F63'>
            SellingPrice:<br/>
            <input  className='rounded-xl  py-2 w-80' type="number" value={SellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
            </label>
        <br />
        <label className='mx-10 text-#002F63' >
            Barcode:<br/>
            <input  className='rounded-xl  py-2 w-80' type="number" value={Barcode} onChange={(e) => setBarcode(e.target.value)} />
            </label>
        <br />
        </div>
        <label className='text-#002F63'>
            ShelfNumber:<br/>
            <input  className='rounded-xl py-2 w-80' type="number" value={ShelfNumber} onChange={(e) => setShelfNumber(e.target.value)} />
            </label>
        <br />




      <button className='text-xl font-bold text-white  bg-red-500 rounded-xl py-2 mt-4 px-2'   type="submit">Add Products</button>
    </form>
    </div>
  );
};

export default AddProduct;