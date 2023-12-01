
import Loyout from './pages/loyout';
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
import AddProduct from './pages/Products/AddProduct';

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
              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
