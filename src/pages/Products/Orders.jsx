import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {

      const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');


      const { data, error } = await supabase
        .from('Orders')
        .select('Year, Barcode, model, name, partName, quantity, totalPrice');
      
      if (error) {
        console.error('Error fetching orders:', error);
      } else {
        setOrders(data);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
     
            <table className='w-full mr-6'>
              <thead className='justify-between'>
                <tr className=''>
                  <th className=''>Year</th>
                  <th>Barcode</th>
                  <th>Model</th>
                  <th>Name</th>
                  <th>PartName</th>
                  <th>Quantity</th>
                  <th>TotalPrice</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.Barcode} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td style={{ textAlign: 'center' }}>{order.Year}</td>
                    <td style={{ textAlign: 'center' }}>{order.model}</td>
                    <td style={{ textAlign: 'center' }}>{order.name}</td>
                    <td style={{ textAlign: 'center' }}>{order.partName}</td>
                    <td style={{ textAlign: 'center' }}>{order.quantity}</td>
                    <td style={{ textAlign: 'center' }}>{order.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };

      export default Orders;
