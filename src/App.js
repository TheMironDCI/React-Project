import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ContactOrg from './ContactOrg'
import PricingORG from './PricingORG'
import FaqOrg from './FaqOrg'
function App() {



  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<PricingORG/>}/>
        <Route path='/faq' element={<FaqOrg/>}/>
        <Route path='/contact' element={<ContactOrg/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
