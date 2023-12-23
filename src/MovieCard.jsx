import React from 'react'

const MovieCard = ({movie}) => {
  return (
   
     <div className="movie">


        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
           <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt='movie-poster'/> 
        </div>

        <div>
          <span>{movie.Type}</span>
          <h1 className='movie-title'>{movie.Title}</h1>
        </div>
      </div>

     
  )
}

export default MovieCard