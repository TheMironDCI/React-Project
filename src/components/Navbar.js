import React from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
            <h1>LOGO</h1>
        </Link>
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>
            <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className='nav-item'>
            <Link to='/about' className="nav-link">About</Link>
        </li>
        <li className='nav-item'>
            <Link to='/contact' className="nav-link">Contact</Link>
        </li>
        <li className='nav-item'>
            <Link to='/faq' className="nav-link">FAQ</Link>
        </li>
      </ul>
    </div>
    </header>
  )
}

export default Navbar
