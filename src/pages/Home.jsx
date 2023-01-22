import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

  const url = "http://localhost:3000/cards"
  const {data, handleHttpResquest, loading, errMessage, closeErrMessage} = useFetch(url)

  return (
    <div className='flex justify-center flex-wrap'>
      {data && 
        data.map((card, index) => (
          <div key={index} className="border-black p-5">
            <h2>{card.name}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Home