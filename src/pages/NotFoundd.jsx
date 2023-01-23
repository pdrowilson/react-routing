import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundd = () => {
  return (
    <div className='flex justify-center flex-wrap mt-7'>
      <div>
        <h1 className='font-medium text-5xl'>404</h1>
        <p className='mr-1'>Oops... There is no card here!</p>
        <Link className="text-blue-400 hover:underline" to={"/"}>See All Cards</Link>
      </div>
    </div>
  )
}

export default NotFoundd