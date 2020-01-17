import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import {useDebounce} from "use-debounce"

import api from '../../services/api'

import icon from "../../assets/1.Icons/icon-magnifier-grey.svg"
import loveDefault from "../../assets/1.Icons/icon-heart-white.svg"
import horse from "../../assets/2.Illustrations/illustration-empty-state@2x.png"


import { Container, Input, ListMovie, DefaultLayout} from './styles';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState("")
  
  const [value] = useDebounce(search, 1000);

  useEffect(()=>{
    async function searchMovie(){
      if(value.length >= 3){
      const response =await api.get(`?apikey=5726cef8&s=${value}`)
  
      const {Search} =response.data

      console.log(Search)
  
      setMovies(Search)
      }

    }
    searchMovie();
  },[value])
  

  return (
    <>
    <Container>
      <Input>
        <img src={icon} alt="search"/>
        <input 
        id="search"
        type="search" 
        placeholder="Search movies ..."   
        onChange={(e)=>setSearch(e.target.value)}

        />
      </Input>
      {!movies.length && (
        <DefaultLayout>
          <img src={horse} alt="logo" />
          <h1>Don't know what to search?</h1>
          <p>Here'an offer cant't refuse</p>

        </DefaultLayout>

        )
      }
      <ListMovie>
      <ul>
        {movies.map(movie => (
           <Link to={`/${movie.imdbID}`}>
              <li key={movie.imdbID}>
                <span>
                    <img src={loveDefault} alt="love"/>
                    <div>
                      <h1>{movie.Title}</h1>
                      <p>{movie.Year}</p>
                    </div>
                </span>
                  <div className="movie">
                    <img src={movie.Poster} alt={movie.Title} />
                  </div>
              </li>
              </Link>  
        ))}
      </ul>
      </ListMovie>
    </Container>
    </>
  );
}