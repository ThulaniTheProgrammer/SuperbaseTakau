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
    <form onSubmit={handleSubmit}>
      <label>
        PartName:
        <input type="text" value={PartName} onChange={(e) => setPartName(e.target.value)} />
      </label>
      <br />
      <label>
        CarName:
        <input type="text" value={CarName} onChange={(e) => setCarName(e.target.value)} />
      </label>
      <br />
      <label>
        Model:
        <input type="text" value={Model} onChange={(e) => setModel(e.target.value)} />
      </label>
      <br />
        <label>
            Year:
            <input type="number" value={Year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <label>
            SellingPrice:
            <input type="number" value={SellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
            </label>
        <br />
        <label>
            Barcode:
            <input type="number" value={Barcode} onChange={(e) => setBarcode(e.target.value)} />
            </label>
        <br />
        <label>
            ShelfNumber:
            <input type="number" value={ShelfNumber} onChange={(e) => setShelfNumber(e.target.value)} />
            </label>
        <br />




      <button type="submit">Add to Superbase</button>
    </form>
  );
};

export default AddProduct;
