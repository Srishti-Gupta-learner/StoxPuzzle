import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom" 
import './index.css'

import Homepage  from './landingpage/home/Homepage'
import Signuppage  from './landingpage/signup/Signuppage'
import Aboutpage from './landingpage/about/Aboutpage'
import Productpage  from './landingpage/product/Productpage'
import Pricepage  from './landingpage/price/Pricepage'
import Supportpage  from './landingpage/support/Supportpage'

// import NotFound from "./landing_page/NotFound";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Notfound from './landingpage/Notfound';

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signuppage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/price' element={<Pricepage />} />
        <Route path='/product' element={<Productpage />} />
        <Route path='/support' element={<Supportpage />} />
         <Route path='*' element={<Notfound />} />
      </Routes>
     <Footer />
    </BrowserRouter>
  </StrictMode>,
)
