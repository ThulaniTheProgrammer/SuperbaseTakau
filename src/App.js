
import Loyout from './pages/loyout';
import Mainheader from './components/CashierMain';
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
import CashierMain from './components/CashierMain';
import AddAdministrator from './pages/Users Registration/AddAdministrator';
import AddManager from './pages/Users Registration/AddManager';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>

          <Route path="AddAdministrator" element={<AddAdministrator />} />
          <Route path="AddManager" element={< AddManager/>} /> 
          <Route path="Mainheader" element={< Mainheader/>} />
          <Route path="WelcomeAdmin" element={<WelcomeAdmin/>} />
          <Route path="WelcomeManager" element={<WelcomeManager/>} />
          <Route path="SighnUp" element={<SighnUp/>} />
          <Route path="ManagerMain" element={<ManagerMain/>} />
          <Route  path="/" element={<WelcomeManager/>}/>
          <Route  path="Product" element={<Product/>}/>
          <Route  path="AddProduct" element={<AddProduct/>}/>
          <Route  path="Stock" element={<Stock/>}/>
          <Route  path="AddProduct" element={<Product/>}/>
          <Route  path="Adminstrator" element={<Adminstrator/>}/>
          <Route  path="Manager" element={<Manager/>}/>
          <Route  path="CashierMain" element={<CashierMain/>}/>
              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
