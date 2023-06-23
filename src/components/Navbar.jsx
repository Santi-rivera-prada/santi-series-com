import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container' style={{ borderRadius: '40px', fontFamily: 'arial', boxShadow: '0 0 30px rgba(55, 255, 255, 0.5)' }}>
        <img className='logo' src='https://i.pinimg.com/236x/5c/35/b5/5c35b541c9cce5c09705f2ced8e19ae5.jpg' alt='logo' />
        <NavLink className='navbar-brand' to='/'>Santi-series.com</NavLink>

        <button className='navbar-toggler' type='button' onClick={toggleMenu} style={{ borderRadius: '40px' }}>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} style={{ borderRadius: '60px', justifyContent: 'end' }}>
          <ul className='navbar-nav' style={{ display: 'grid', borderRadius: '60px', justifyContent: 'center' }}>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/' activeClassName='active'>Series</NavLink>
            </li>
            <li className='nav-item' style={{ borderRadius: '40px' }}>
              <NavLink className='nav-link' to='/about' activeClassName='active'>Acerca de</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
