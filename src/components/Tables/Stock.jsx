import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router';
import AddProduct from '../../pages/Products/AddProduct';





const Fetch = () => {
  

  const [PartName, setPartName] = useState('');
  const [CarName, setCarName] = useState('');
  const [Model, setModel] = useState('');
  const [Year, setYear] = useState('');
  const [SellingPrice, setSellingPrice] = useState('');
  const [Barcode, setBarcode] = useState('');
  const [ShelfNumber, setShelfNumber] = useState('');
  const [Takau, setTakau] = useState([]);

  const [selectedRowData, setSelectedRowData] = useState(null);


const handleEditClick = (rowData) => {
  setSelectedRowData(rowData);
 
};


  useEffect(() => {
    fetchTakau();
  }, []);


  const fetchTakau = async () => {
    const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

    const { data, error } = await supabase.from('Takau').select('*');

    if (error) {
      console.error('Error fetching Table:', error);
    } else {
      setTakau(data);
    }
  };

  const handleDelete = async (id) => {
    const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

    const { data, error } = await supabase.from('Takau').delete().eq('id', id);
     window.print();
    window.location.reload();
    if (error) {
        console.error('Error deleting smoothie:', error);
    } else {
        console.log('Takau deleted successfully:', data);
        fetchTakau(); // Fetch the updated smoothies data
    }
};

async function handleEdit(event) {
  event.preventDefault();
  const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

  const { data, error } = await supabase
    .from('Takau')
    .update({
      PartName: selectedRowData.PartName,
      // ... other fields
    })
    .eq('id', selectedRowData.id)

  if (error) {
    console.error('Error updating:', error);
  } else {
    console.log('Updated:', data);
  }
}





  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      PartName,
      CarName,
      Model,
      Year,
      SellingPrice,
      Barcode,
      ShelfNumber,
    };
    const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

    const { data, error } = await supabase.from('Takau').insert([formData]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      fetchTakau(); // Fetch the updated smoothies data
    }

    setPartName('');
    setCarName('');
    setModel('');
    setYear('');
    setSellingPrice('');
    setBarcode('');
    setShelfNumber('');
  };

  let navigate = useNavigate();

  return (
    <div className='flex w-full'>
      <form onSubmit={handleSubmit}>
        
        
      </form>

      <table className='w-full'>
        <thead>
          <tr  className='bg-red-300'>
            <th>PartName</th>
            <th>CarName</th>
            <th>Model</th>
            <th>Year</th>
            <th>SellingPrice</th>
            <th>Barcode</th>
            <th>ShelfNumber</th>
        
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Takau.map((Takau) => (
            <tr key={Takau.id}>
              <td  style={{ textAlign: 'center' }}>{Takau.PartName}</td>
              <td style={{ textAlign: 'center' }}>{Takau.CarName}</td>
              <td style={{ textAlign: 'center' }}>{Takau.Model}</td>
              <td style={{ textAlign: 'center' }}>{Takau.Year}</td>
              <td style={{ textAlign: 'center' }}>{Takau.SellingPrice}</td>
              <td style={{ textAlign: 'center' }}>{Takau.Barcode}</td>
              <td style={{ textAlign: 'center' }}>{Takau.ShelfNumber}</td>

              <td>
    <button onClick={() => handleEditClick(Takau)}>Edit</button>
  </td>
              
              <td>
                            <button onClick={() => handleDelete(Takau.id)}>Delete</button>
                        </td>
                       
            </tr>
          ))}
        </tbody>
      </table>
      
    

      <form onSubmit={handleEdit}>
      <input type="text" value={selectedRowData ? selectedRowData.PartName : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,PartName: e.target.value }); }} />

        <input type="text" value={selectedRowData ? selectedRowData.CarName : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,CarName: e.target.value }); }} />
        <input type="text" value={selectedRowData ? selectedRowData.Model : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Model: e.target.value }); }} />
        <input type="text" value={selectedRowData ? selectedRowData.Year : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Year: e.target.value }); }} />
        <input type="text" value={selectedRowData ? selectedRowData.SellingPrice : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,SellingPrice: e.target.value }); }} />
        

        <input type="text" value={selectedRowData ? selectedRowData.Barcode : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Barcode: e.target.value }); }} />
        <input type="text" value={selectedRowData ? selectedRowData.ShelfNumber : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,ShelfNumber: e.target.value }); }} />
        {/* ... */}
        <button type="submit">Submit</button>
      </form>


    </div>
  );



};

export default Fetch;
    