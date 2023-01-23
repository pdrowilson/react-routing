import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
  const [searchParams] = useSearchParams()
  const url = `http://localhost:3000/cards?${searchParams}`
  const {data: card, loading} = useFetch(url)

  return (
    <div className='flex justify-center mt-7'>
      {loading &&
        <div className='fill-blue-400 mt-5 flex justify-center'>
          <svg className="animate-spin" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".15"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" /></svg>
        </div>
      }
      {card && 
        card.map((card, index) => (
          <div key={index} className="border border-black-200 px-16 py-10 mx-10 rounded-lg flex justify-content-center text-lg">
            <div>
              <h2 className='font-medium'>{card.name}</h2>
              <span className='italic'>{card.type}</span>
              <p className='italic'>{card.text}</p>
              <span className='italic'>{card.manaCost}</span>
              <hr className="my-4"/>
              <Link className="text-blue-400 hover:underline block"  to={`/cards/${card.id}/info`}>Info</Link>
              <Link className="text-blue-400 hover:underline" to={"/"}>All Cards</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Search