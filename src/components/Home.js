import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Testimonials from './Testmonials'
import Faq from './Faq'
import Contact  from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Pricing />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Home
