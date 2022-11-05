import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ReactDOM } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pricing from "./components/Pricing"
import FAQ from "./components/Faq"
import Contact from "./components/Contact"
function App() {



  return(
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
