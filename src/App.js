import React, { useEffect, useState } from 'react'
import './App.css';
import Search from './search.svg';
import MovieCard from './MovieCard';

const App = () => {
  const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=bb61484'
  const [searchItem, setsearchItem] = useState('');
  const [Movies, setMovies] = useState([]);


  const searchMovies =async (title)=>{

    
    const res = await fetch(`${API}&s=${title}`)
    const fdata = await res.json();
    const data =fdata.Search;
    
    setMovies(data);
  }

  useEffect(() => {
    searchMovies(searchItem)
  }, [])
  


  return (
    <>
      <div className="app">
        <h1>Movies/TV</h1>

        <div className="search">
          <input type="text"
          value= {searchItem} 
          placeholder= 'Search for movie'
          
          onChange={(e)=>{setsearchItem(e.target.value)}}
          onKeyDown={(e)=>{
            
            if(e.key == 'Enter'){
              searchMovies(searchItem)
            }

          }}
          />
          <img src={Search}
          alt ='Search icon'
          onClick={(e)=>{searchMovies(searchItem)}}
          
          />

        </div>

      </div>
      
      <div className="container">
      {
        Movies?.length>0 ? (
          Movies.map((movie )=>(
            <MovieCard movie={movie}/>
        ))
        ):(
          <div className="empty">
            <h1>No Movies Found</h1>
          </div>
        )
      }
      </div>

    
      
      
         
      </>
    )
}

export default App