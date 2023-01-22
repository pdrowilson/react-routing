import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

  const url = "http://localhost:3000/cards"
  const {data, handleHttpResquest, loading, errMessage, closeErrMessage} = useFetch(url)
  return (
    <div className='flex justify-center flex-wrap mt-7'>
      {data && 
        data.map((card, index) => (
          <div key={index} className="border border-black-200 p-10 m-2 rounded-lg w-2/5 flex justify-content-center text-lg">
            <div>
              <h2 className='font-medium'>{card.name}</h2>
              <p className='italic'>{card.text}</p>
              <hr className="my-4"/>
              <Link className="text-blue-400 hover:underline block"  to={`/cards/${card.id}`}>Show</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home