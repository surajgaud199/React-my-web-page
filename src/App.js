// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Product from './Product';
import Headar from './com-component/Headar';
import Maltipalcard from './Maltipalcard';

// import Exampale from './Exampale';


function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>

         {/* <Route path='/' element = {<><Headar/> <Home/></>} />
         <Route path='/about' element = {<About/>} />
         <Route path='/contect' element = {<Contect/>} />
         <Route path='/product' element = {<Product/>} />
         <Route path='/maltipalcard' element = {<Maltipalcard/>} /> */}
         <Route path='/' element={<Headar/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contect' element={<Contect/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='maltipalcard' element={<Maltipalcard/>}/>
          </Route> 
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
