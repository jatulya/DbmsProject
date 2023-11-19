import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donor from './Components/Donor/Donor';

function App (){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
   </BrowserRouter> 
   <Donor/> 
   </> 
   ) 
}

export default App