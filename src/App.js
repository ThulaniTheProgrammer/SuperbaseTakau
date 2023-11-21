
import Loyout from './pages/loyout';
import Mainheader from './components/mainheader';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from './pages/Welcome';
import CarName from './components/carName';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       
      
     
          <Route path="Mainheader" element={<Mainheader />} />
          <Route  path="/" element={<Welcome/>} />
          
          
          
      
      
      
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
