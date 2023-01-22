import { useParams } from "react-router-dom"

const Card = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div className='flex justify-center flex-wrap mt-7'>
      <p>id do produto: {id}</p>
    </div>
  )
}

export default Card