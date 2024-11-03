import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name }) => {
  return (
    <div className='grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-8 shadow-sm'>
      {name.slice(0,8).map((item) => (
        <div key={item.id}> 
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt={item.title}  className='mx-auto w-full hover:scale-105 transition-all duration-300'/>
          </Link>
          <div className='mt-4 pt-4 '>
           <h1 className='text-base font-semibold mb-1'>{item.title}</h1>
          </div>
          <div className='flex justify-between'>
           <p className='text-black/50'>  {item.category}</p>
           <p className='font-semibold'> ${item.price}</p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;
