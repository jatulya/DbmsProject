import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Login from './Components/Login/Signup';

function App (){
  return (
    <BrowserRouter>
     <Route path='/' element={<Login />}></Route>
     <Route path='/signup' element={<Signup />}></Route>
    </BrowserRouter>  )
}

export default App