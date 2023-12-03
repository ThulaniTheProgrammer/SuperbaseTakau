

import Mainheader from './components/mainheader';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from './pages/WelcomeCashier';
import CarName from './components/carName';
import WelcomeAdmin from './pages/WelcomeAdmin';
import WelcomeManager from './pages/WelcomeManager';
import SighnUp from './pages/SighnUp';
import ManagerMain from './components/ManagerMain';
import Product from './pages/Products/Product';
import Stock from './components/Tables/Stock';
import Adminstrator from './pages/Users Registration/Adminstator';
import Manager from './pages/Users Registration/Manager';
import AddProduct from './pages/Products/AddProduct';
import Loyout from './components/loyout';
import Orders from './components/Tables/Orders';
import Loyouts from './components/loyouts/loyouts';
import Administartor from './pages/Users Registration/Adminstator';
import AdministatorRegistration from './pages/Users Registration/AdministatorRegistration';
import CashierRegistration from './pages/Users Registration/CashierRegistration';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       
          <Route path="Mainheader" element={< Mainheader/>} />
          <Route path="WelcomeAdmin" element={<WelcomeAdmin/>} />
          <Route path="WelcomeManager" element={<WelcomeManager/>} />
          <Route path="SighnUp" element={<SighnUp/>} />
          <Route path="ManagerMain" element={<ManagerMain/>} />
          <Route  path="/" element={<Welcome/>}/>
          <Route  path="Product" element={<Product/>}/>
          <Route  path="AddProduct" element={<AddProduct/>}/>
          <Route  path="Stock" element={<Stock/>}/>
          <Route  path="AddProduct" element={<Product/>}/>
          <Route  path="Adminstrator" element={<Adminstrator/>}/>
          <Route  path="Manager" element={<Manager/>}/>
          <Route  path="loyout" element={<Loyout/>}/>
          <Route  path="loyouts" element={<Loyouts/>}/>
          <Route  path="orders" element={<Orders/>}/>
          <Route  path="administartor" element={<Administartor/>}/>
          <Route  path="administatorRegistration" element={<AdministatorRegistration/>}/>
          <Route  path="cashierRegistration" element={<CashierRegistration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
