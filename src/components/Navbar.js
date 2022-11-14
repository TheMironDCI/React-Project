import React from 'react'
import "./NavbarStyles.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='../logo.png' />
        </Link>
      </div>
      <div className='hamburger'></div>
      <ul className='nav-menu'>
        <li className='nav-item'>
            <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/pricing' className="nav-link">Pricing</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/contact' className="nav-link">Contact</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/faq' className="nav-link">FAQ</NavLink>
        </li>
      </ul>
    </div>
    </header>
  )
}

export default Navbar