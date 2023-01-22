import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex bg-blue-600 flex justify-center flex-wrap'>
     <Link className='p-5 text-blue-50 hover:text-blue-400 hover:bg-blue-100' to="/">Home</Link> 
     <Link className='p-5 text-blue-50 hover:text-blue-400 hover:bg-blue-100' to="/about">About</Link> 
    </nav>
  )
}

export default Navbar