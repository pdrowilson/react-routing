import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex bg-blue-600 flex justify-center flex-wrap'>
     <NavLink 
        className={({isActive}) => (
          `${isActive ? 'bg-blue-100 text-blue-400' : 'text-blue-50 hover:text-blue-50 hover:bg-blue-500'} p-5`
        )} 
        to="/">
        Home
      </NavLink>
     <NavLink 
        className={({isActive}) => (
          `${isActive ? 'bg-blue-100 text-blue-400' : 'text-blue-50 hover:text-blue-50 hover:bg-blue-500'} p-5`
        )} 
        to="/about">
        About
      </NavLink>
    </nav>
  )
}

export default Navbar