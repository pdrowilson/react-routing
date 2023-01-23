import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    navigate(`/search?q=${query}`)
  }

  return (
    <div className='flex justify-center mt-7'>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          placeholder="Enter the card name"
          className='
            block
            self-center 
            p-2 
            rounded 
            w-full 
            text-black 
            border-2
            border-sky-200
            focus-visible:outline-blue-500
            disabled:border-gray-500'
            type="text"  
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button
            className='
              mx-2 
              px-2 
              py-2 
              self-center 
              rounded-md 
              text-white 
              bg-blue-500 
              hover:bg-blue-600 
              cursor-pointer 
              disabled:bg-blue-300' 
            onClick={handleSubmit} 
            value="Submit">
              <span>Search</span>
          </button>
      </form>
    </div>
  )
}

export default SearchForm