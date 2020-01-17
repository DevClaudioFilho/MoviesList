import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import api from '../../services/api'
import { Container,Sobre,Status,Notes,Plot,Test} from './styles';
export default function Movie(props) {
  
  const [movies, setMovies] = useState([]); 

  useEffect(()=>{
    async function loadMovie(){
      const { imdbID } = props.match.params
      console.log(imdbID)
      const response =await api.get(`?apikey=5726cef8&i=${imdbID}`)
  
      setMovies(response.data)
    }
    loadMovie();
  },[props])
  
  return (
    
    <>
      <Container>
        
        <Sobre>
        <Link><img src="" alt=""/></Link>
          <Status>
            <ul>
              <li>{movies.Runtime} · {movies.Year}</li>

              <li>{movies.Rated}</li>
            </ul>
          </Status>
          <h1>{movies.Title}</h1>
          <Notes>
            <div><img src="" alt=""/><p>{movies.imdbRating}/10</p></div>
            <div><img src="" alt=""/><p>{movies.Metascore}%</p></div> 
            <div><img src="" alt=""/><p>add to favourites</p></div>
          </Notes>
          <Plot>
            <h1>Plot</h1>
            <p>{movies.Plot}</p>
          </Plot>
          <Test>
            <div><h1>Cast</h1><p>{movies.Actors}</p></div>
            <div><h1>Genre</h1><p>{movies.Genre}</p></div>
            <div><h1>Director</h1><p>{movies.Director}</p></div>
          </Test>
        </Sobre>
        <img src={movies.Poster} alt=""/>
        </Container>
    </>
  );
}
