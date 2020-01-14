import React from 'react';

import api from '../../services/api'

import icon from "../../assets/1.Icons/icon-magnifier-grey.svg"
import horse from "../../assets/2.Illustrations/illustration-empty-state@2x.png"


import { Container, Input, ListMovie} from './styles';

export default function Home() {
  
  function searchMovie(){
    const value = document.getElementById("search").value;
    console.log(value);

    const movies = api.get(`s=${value}`)

    console.log(movies)
    return movies
  }


  return (
    <>
    <Container>
      <Input>
        <img src={icon} alt="search"/>
        <input 
        id="search"
        type="search" 
        placeholder="Search movies ..."   
        onChange={()=> searchMovie()}

        />
      </Input>
      <ListMovie>
      </ListMovie>
    </Container>
    </>
  );
}

//<img src={horse} alt="logo"/>