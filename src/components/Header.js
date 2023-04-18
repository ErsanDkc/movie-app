import React, { useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

function Header() {
  const [movieName, setMovieName] = useState("")
  const [data,setData] = useState([])
  
  const API_KEY = process.env.REACT_APP_API_KEY_MOVIE;
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
  
  
    const getMovies = async() => {
      try{
        const {data} = await axios(`${BASE_URL}&query=${movieName}`)
        setData(data.results);
      }catch(error) {
        console.log("error:",error);
      }
  
    }
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!movieName.trim()) {
      return window.alert("Please enter movie name")
    }
   await getMovies()

   setMovieName("")
  } 

  const handleChange = (e) => setMovieName(e.target.value)
  return (
    <header className='d-flex flex-column justify-content-center align-items-center gap-5 mt-5'>
      <form onSubmit={handleSubmit} style={{width:"600px"}} className='d-flex gap-2'>
        <input className='form-control'
          type="text"
          value={movieName}
          onChange={handleChange}
          placeholder='Search a movie'
          autoFocus
        />
        <button type="submit" className='btn btn-primary'>Search</button>
      </form>
      
    <MovieCard  data={data} />
    </header>
  )
}

export default Header