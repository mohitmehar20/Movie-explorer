import { useState , useEffect} from 'react'
import MovieCard from './components/MovieCard'

const API_URL = 'https://www.omdbapi.com/?apikey=e288953d'
function App() {
  const [Movies, setMovies] = useState([])
  const [SearchedMovie, setSearchedMovie] = useState('')

  
    useEffect(() => {
      searchMovie("Batman");
    }, []);
  const searchMovie = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
    console.log(data.Search);
  }
  
  return (
    <>
      <h1 className=' m-5 text-4xl font-bold text-center text-white font-mono'>MovieVerse</h1>
      <div className=' flex justify-center'>

          <input value={SearchedMovie} onChange={(e)=>{ setSearchedMovie(e.target.value)}} placeholder='Search' className=' border-2 rounded-s-2xl p-3 max-w-[60%] sm:max-w-[90%] text-xl text-gray-800' type="text" />

          <button onClick={() => {searchMovie(SearchedMovie)}} className=' bg-green-500 border-2 p-3 rounded-e-2xl text-xl active:bg-green-600 hover:text-white hover:font-bold hover:bg-green-700'>Search</button>

      </div>
      <div className='my-20'>
        {
         Movies?.length > 0 ? (
          <div className=' flex flex-wrap justify-center'>
            {Movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>) : (
          <div>{
              SearchedMovie.length == 0 ? (<h2 className=' text-center text-white text-2xl font-bold'>Please enter a Movie Title</h2>):(<h2 className=' text-center text-white text-2xl font-bold'>No Result found for <span className=' text-red-600'>{SearchedMovie}</span></h2>)
            }
            
          </div>
        )
        }
      </div>
 
    </>
  )
}

export default App
