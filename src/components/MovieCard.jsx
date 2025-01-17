import React from 'react'

const ERR = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
function MovieCard({movie}) {
  return (
    <>
    <div className='hover:shadow-xl hover:text-white hover:bg-gray-800 text-black transition-all m-4 rounded-2xl overflow-hidden w-[230px] h-[550px] border-black border-2 hover:scale-105  bg-gray-600 '>
        <img className='w-full h-[70%]  transition-all ' src={movie.Poster !== 'N/A'? movie.Poster : ERR} alt="image" />
        <p className=' mx-2 mt-2 font-bold'>{movie.Year}</p>      
        <p className=' mx-2 text-xl'>{movie.Type}</p>
        <h3 className=' mx-2 mb-2 text-3xl font-bold'> {movie.Title} </h3>
    </div>
    </>
  )
}

export default MovieCard
