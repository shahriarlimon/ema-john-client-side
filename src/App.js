
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/order' element={<Order/>}/>
       <Route path='/inventory' element={
         <RequireAuth>
           <Inventory/>
         </RequireAuth>
       }/>
       <Route path='/shipment' element={
         <RequireAuth>
           <Shipment/>
         </RequireAuth>
       }/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element = {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
